const background = "bg-backgroundColorSecondary";


function Page2(props) {
    return (
      <div className="snap-always snap-center" id="page2">
        <div className={`relative min-h-screen flex ${background}`}>
            <div className="container mx-auto flex justify-center items-center text-4xl ">
                Page 2
            </div>
        </div>
      </div>
    );
}

export default Page2;
