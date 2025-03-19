import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`bg-slate-900 shadow-md p-4 ${className}`}>
      {children}
    </div>
  );
}
