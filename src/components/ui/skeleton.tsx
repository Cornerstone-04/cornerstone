// Skeleton component utilities
export function Skeleton({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`animate-pulse bg-zinc-200 dark:bg-zinc-800 rounded ${className}`}
      {...props}
    />
  );
}

// Project Card Skeleton
export function ProjectCardSkeleton() {
  return (
    <div className="p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 space-y-4">
      <div className="flex items-start justify-between">
        <div className="space-y-2 flex-1">
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
        <Skeleton className="h-8 w-8 rounded-full" />
      </div>
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
      <div className="flex gap-2 pt-2">
        <Skeleton className="h-6 w-16 rounded-full" />
        <Skeleton className="h-6 w-20 rounded-full" />
        <Skeleton className="h-6 w-18 rounded-full" />
      </div>
    </div>
  );
}

// Timeline Skeleton
export function TimelineSkeleton() {
  return (
    <div className="flex gap-4 py-4">
      <div className="flex flex-col items-center">
        <Skeleton className="w-3 h-3 rounded-full" />
        <Skeleton className="w-0.5 h-24 mt-2" />
      </div>
      <div className="flex-1 space-y-3">
        <Skeleton className="h-5 w-2/3" />
        <Skeleton className="h-4 w-1/3" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </div>
    </div>
  );
}

// Experience Accordion Skeleton
export function AccordionSkeleton() {
  return (
    <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 space-y-3">
      <div className="flex items-center justify-between">
        <div className="space-y-2 flex-1">
          <Skeleton className="h-5 w-1/2" />
          <Skeleton className="h-4 w-1/3" />
        </div>
        <Skeleton className="h-5 w-5 rounded" />
      </div>
    </div>
  );
}

// Testimonial Card Skeleton
export function TestimonialSkeleton() {
  return (
    <div className="p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 space-y-4">
      <Skeleton className="h-8 w-8" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
      <div className="flex items-center gap-3 pt-4">
        <Skeleton className="w-12 h-12 rounded-full" />
        <div className="space-y-2 flex-1">
          <Skeleton className="h-4 w-1/3" />
          <Skeleton className="h-3 w-1/2" />
        </div>
      </div>
    </div>
  );
}

// Image Skeleton
export function ImageSkeleton({
  aspectRatio = "square",
}: {
  aspectRatio?: "square" | "video" | "portrait";
}) {
  const aspectClasses = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
  };

  return <Skeleton className={`w-full ${aspectClasses[aspectRatio]}`} />;
}

// Form Field Skeleton
export function FormFieldSkeleton() {
  return (
    <div className="space-y-2">
      <Skeleton className="h-4 w-24" />
      <Skeleton className="h-12 w-full rounded-lg" />
    </div>
  );
}

// Page Loading Skeleton (Full Page)
export function PageLoadingSkeleton() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div className="flex items-start justify-between">
        <div className="space-y-4 flex-1">
          <Skeleton className="h-10 w-2/3" />
          <Skeleton className="h-5 w-1/2" />
        </div>
        <Skeleton className="w-32 h-32 rounded-lg" />
      </div>
      <div className="space-y-4">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-4/6" />
      </div>
    </div>
  );
}

// Contact Connect Card Skeleton
export function ConnectCardSkeleton() {
  return (
    <div className="w-full sm:w-[48%] p-4 rounded-lg border border-zinc-200 dark:border-zinc-800">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Skeleton className="w-10 h-10 rounded" />
          <Skeleton className="h-5 w-20" />
        </div>
        <Skeleton className="w-5 h-5" />
      </div>
    </div>
  );
}
