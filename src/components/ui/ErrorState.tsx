interface ErrorStateProps {
  title: string;
  onRetry:(()=> void) | undefined;
  message: string;

}

export default function ErrorState({title, onRetry, message}:ErrorStateProps){
  return(
    <main className="max-w-360 w-19/20 h-dvh m-auto ">
        <section role="alert" className=" h-dvh flex flex-col items-center justify-center gap-3">
          <h1 className="text-2xl md:text-3xl text-white font-semibold text-center">{title}</h1>
          <p className="text-zinc-400 md:text-xl w-full text-center">{message}</p>
          <button
            type="button"
            onClick={onRetry}
            className="bg-button  text-white cursor-pointer font-semibold rounded-full py-3 px-10"
          >
            Retry
          </button>
        </section>
      </main>
    )
}