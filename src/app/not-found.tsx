import Image from "next/image";

const NotFoundPage = () => {
  return (
    <div className="w-[90%] mx-auto">
      <Image
        src="https://img.freepik.com/free-vector/hand-drawn-404-error_23-2147738999.jpg?ga=GA1.1.630025796.1757690952&semt=ais_incoming&w=740&q=80"
        width={1000}
        height={500}
        alt="not found page"
        className="w-full"
      />
    </div>
  );
};

export default NotFoundPage;
