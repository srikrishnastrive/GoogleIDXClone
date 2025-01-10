import usePing from "../../hooks/apis/queries/usePing";



export const PingComponent = () => {
const {isLoading,data} = usePing();
  console.log(data);
  if (isLoading){
    return (
      <>
        Loading....
      </>
    )
  }

  return (
    <>
      <h1>Hello world {data.message}</h1>
    </>
  )
}
