interface ErrorStateProps {
  title: string;
  retry: ()=> void;
  message: string;

}

export default function ErrorState({title, retry, message}:ErrorStateProps){
  return(
    <main className="max-w-360 w-fit m-auto mb-20">
        <section role="alert" className="mt-10 flex flex-col items-start gap-3">
          <h1 className="text-2xl md:text-3xl text-white font-semibold text-center">{title}</h1>
          <p className="text-zinc-400 md:text-xl w-full text-center">{message}</p>
          <button
            type="button"
            onClick={retry}
            className="bg-button m-auto text-white cursor-pointer font-semibold rounded-full py-3 px-10"
          >
            Retry
          </button>
        </section>
      </main>
    )
}