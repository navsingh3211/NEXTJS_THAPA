import Link from "next/link";
import { useRouter } from "next/router";

const ErrorPage = () => {
  const router = useRouter();
  const onClickHandler = ()=>{
    router.push("/");
  }
  return (
    <>
      <section className="page_404">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 ">
              <div
                className="col-sm-10 col-sm-offset-1  text-center"
                style={{ textAlign: "center" }}
              >
                <div className="four_zero_four_bg">
                  <h1>404</h1>
                </div>

                <div className="contant_box_404">
                  <h3 className="h2">Look like you're lost</h3>

                  <p>the page you are looking for not avaible!</p>
                  {/* <Link href="/" className="link_404">
                    Go to Home
                  </Link> */}

                   {/* <a onClick={()=>router.push("/")}  className="link_404">Go to Home</a> */}

                   <a onClick={onClickHandler}  className="link_404">Go to Home</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;
