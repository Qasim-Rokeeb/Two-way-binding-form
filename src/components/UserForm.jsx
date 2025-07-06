export default function UserForm({ name, setName }) {
  return (
    <div className="flex flex-col gap-2 items-start">
      <label htmlFor="name" className="text-lg font-medium">Your Name:</label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border px-4 py-2 rounded w-64"
        placeholder="Enter your name"
      />
    </div>
  );
}
