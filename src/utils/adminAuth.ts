// Admin authentication utilities
// In production, these should be stored securely and hashed

export const ADMIN_SECRETS = {
  // Primary admin key
  PRIMARY: 'cyber_admin_2024_secure_key',
  // Backup admin key
  BACKUP: 'admin_backup_key_2024',
  // Emergency admin key
  EMERGENCY: 'emergency_admin_access_2024'
};

export const ADMIN_SESSION_CONFIG = {
  // Session duration in milliseconds (24 hours)
  SESSION_DURATION: 24 * 60 * 60 * 1000,
  // Maximum login attempts before lockout
  MAX_ATTEMPTS: 5,
  // Lockout duration in milliseconds (30 minutes)
  LOCKOUT_DURATION: 30 * 60 * 1000
};

export interface AdminSession {
  isAuthenticated: boolean;
  loginTime: number;
  sessionId: string;
  lastActivity: number;
}

export class AdminAuthManager {
  private static instance: AdminAuthManager;
  private loginAttempts: Map<string, { count: number; lastAttempt: number }> = new Map();

  static getInstance(): AdminAuthManager {
    if (!AdminAuthManager.instance) {
      AdminAuthManager.instance = new AdminAuthManager();
    }
    return AdminAuthManager.instance;
  }

  validateSecretKey(key: string): boolean {
    return Object.values(ADMIN_SECRETS).includes(key);
  }

  isAccountLocked(ip: string = 'default'): boolean {
    const attempts = this.loginAttempts.get(ip);
    if (!attempts) return false;

    const now = Date.now();
    const timeSinceLastAttempt = now - attempts.lastAttempt;
    
    // Reset attempts if lockout period has passed
    if (timeSinceLastAttempt > ADMIN_SESSION_CONFIG.LOCKOUT_DURATION) {
      this.loginAttempts.delete(ip);
      return false;
    }

    return attempts.count >= ADMIN_SESSION_CONFIG.MAX_ATTEMPTS;
  }

  recordLoginAttempt(ip: string = 'default', success: boolean): void {
    const attempts = this.loginAttempts.get(ip) || { count: 0, lastAttempt: 0 };
    
    if (success) {
      // Reset attempts on successful login
      this.loginAttempts.delete(ip);
    } else {
      // Increment failed attempts
      attempts.count += 1;
      attempts.lastAttempt = Date.now();
      this.loginAttempts.set(ip, attempts);
    }
  }

  createSession(): AdminSession {
    const now = Date.now();
    const sessionId = this.generateSessionId();
    
    const session: AdminSession = {
      isAuthenticated: true,
      loginTime: now,
      sessionId,
      lastActivity: now
    };

    // Store session in sessionStorage
    sessionStorage.setItem('admin_session', JSON.stringify(session));
    
    return session;
  }

  getSession(): AdminSession | null {
    try {
      const sessionData = sessionStorage.getItem('admin_session');
      if (!sessionData) return null;

      const session: AdminSession = JSON.parse(sessionData);
      
      // Check if session is still valid
      const now = Date.now();
      const sessionAge = now - session.loginTime;
      
      if (sessionAge > ADMIN_SESSION_CONFIG.SESSION_DURATION) {
        this.clearSession();
        return null;
      }

      // Update last activity
      session.lastActivity = now;
      sessionStorage.setItem('admin_session', JSON.stringify(session));
      
      return session;
    } catch (error) {
      console.error('Error parsing admin session:', error);
      this.clearSession();
      return null;
    }
  }

  clearSession(): void {
    sessionStorage.removeItem('admin_session');
    sessionStorage.removeItem('admin_authenticated');
    sessionStorage.removeItem('admin_login_time');
  }

  private generateSessionId(): string {
    return 'admin_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now().toString(36);
  }

  // Security logging
  logSecurityEvent(event: string, details: any = {}): void {
    const logEntry = {
      timestamp: new Date().toISOString(),
      event,
      details,
      userAgent: navigator.userAgent,
      url: window.location.href
    };

    // In production, this should be sent to a secure logging service
    console.warn('SECURITY EVENT:', logEntry);
    
    // Store in sessionStorage for debugging (remove in production)
    const logs = JSON.parse(sessionStorage.getItem('admin_security_logs') || '[]');
    logs.push(logEntry);
    
    // Keep only last 50 logs
    if (logs.length > 50) {
      logs.splice(0, logs.length - 50);
    }
    
    sessionStorage.setItem('admin_security_logs', JSON.stringify(logs));
  }
}

// Export singleton instance
export const adminAuth = AdminAuthManager.getInstance();
