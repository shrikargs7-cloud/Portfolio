export default function GridBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      <div
        className="
        absolute
        inset-0
        bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),
        linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]
        bg-[size:50px_50px]
        "
      />

    </div>
  );
}