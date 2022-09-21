import { PropsWithChildren } from "react";

export const SkeletonLoading = ({ children }: PropsWithChildren<unknown>) => (
  <span>{children}</span>
);
