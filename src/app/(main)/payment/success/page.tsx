import Image from "next/image";

const PaymentSuccessPage = () => {
  return (
    <div className="mt-40 flex flex-col items-center justify-center ">
      <div className="card w-full max-w-md  shadow-xl">
        <figure className="px-10 pt-10">
          <Image
            src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/sign-check-icon.png"
            alt="Payment Success"
            className="rounded-xl"
            width={50}
            height={50}
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Payment Success!</h2>
          <p>
            Thank you for your payment. Your transaction has been completed.
          </p>
          <div className="card-actions">
            <button className="btn btn-primary mt-4">Go to home</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;
