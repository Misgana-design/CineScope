export default function Footer() {
  const date = new Date();
  return (
    <h1 className="text-2xl mt-5 text-center p-16 bg-linear-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">
      Made with ❤️ by Misgana {date.getFullYear()}
    </h1>
  );
}
