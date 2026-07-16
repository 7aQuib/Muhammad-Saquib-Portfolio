export function PageHeader({ title, description }: { title: string; description: string }) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-display font-bold text-foreground mb-2">{title}</h1>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
