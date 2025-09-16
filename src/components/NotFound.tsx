import { Link } from 'react-router-dom';
import { Button } from '~/components/ui/button';

const NotFound = () => {
  return (
    <>
      <style>
        {`
          @keyframes glitch-top {
            2%, 64% { transform: translate(2px, -2px); }
            4%, 60% { transform: translate(-2px, 2px); }
            62% { transform: translate(13px, -1px) skew(-13deg); }
          }
          @keyframes glitch-bottom {
            2%, 64% { transform: translate(-2px, 0); }
            4%, 60% { transform: translate(-2px, 0); }
            62% { transform: translate(-22px, 5px) skew(21deg); }
          }
          .glitch {
            position: relative;
            color: hsl(var(--primary));
            font-size: 6rem;
            line-height: 1;
            font-family: 'Orbitron', sans-serif;
            font-weight: 900;
          }
          .glitch:before,
          .glitch:after {
            content: attr(data-text);
            position: absolute;
            left: 0;
            width: 100%;
            height: 100%;
            background: hsl(var(--background));
            overflow: hidden;
          }
          .glitch:before {
            left: 2px;
            text-shadow: -2px 0 hsl(var(--secondary));
            animation: glitch-top 1s linear infinite alternate-reverse;
          }
          .glitch:after {
            left: -2px;
            text-shadow: -2px 0 hsl(var(--accent)), 2px 2px hsl(var(--secondary));
            animation: glitch-bottom 1.5s linear infinite alternate-reverse;
          }
        `}
      </style>
      <div className="min-h-screen flex flex-col items-center justify-center text-center bg-background px-4">
        <div className="glitch" data-text="404">404</div>
        <h1 className="text-2xl md:text-3xl font-heading mt-4">CONNECTION LOST</h1>
        <p className="text-muted-foreground mt-2 mb-8 max-w-md">
          The page you are looking for has been lost in the digital void. It might have been moved, deleted, or never existed in this reality.
        </p>
        <Button asChild>
          <Link to="/">Return to Secure Zone</Link>
        </Button>
      </div>
    </>
  );
};

export default NotFound;
