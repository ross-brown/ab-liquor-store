interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

import { cn } from "@/lib/utils";

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={cn("mx-auto max-w-7xl", className)}>
      {children}
    </div>
  );
};

export default Container;
