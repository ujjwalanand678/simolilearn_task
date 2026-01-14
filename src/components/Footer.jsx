import RsvpForm from "./RsvpForm";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <p className="mb-6 text-lg">Space is limited.</p>

        <div className="max-w-xl bg-white/90 p-4 rounded-lg">
          <RsvpForm />
        </div>

        <div className="mt-12 text-xs opacity-70">
          © 2009–2025 Simplilearn Solutions. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
