 const background = "bg-backgroundColorPrimary";

function Page1(props) {
    return (
      <div className="snap-always snap-center" id="page1">
        <div className={`relative min-h-screen flex ${background}`}>
            <div className="container max-w-screen-xl mx-auto flex justify-center items-center text-4xl ">
                Page 1
            </div>
        </div>
      </div>
    );
}

export default Page1;
