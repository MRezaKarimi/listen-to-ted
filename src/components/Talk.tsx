function Talk() {
  const url =
    '"https://talkstar-photos.s3.amazonaws.com/uploads/2346ca68-a820-4983-a4d5-0f10bb5b7417/GopalDPatel_2023T-1350x675.jpg"';

  return (
    <div className="bg-gray-100 rounded-xl h-fit overflow-clip flex flex-col lg:flex-row gap-x-4 cursor-pointer">
      <div
        className="h-40 lg:h-auto lg:w-56 shrink-0 bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${url})` }}
      />
      <div className="grow flex flex-col p-2 md:p-4 gap-y-2">
        <p className="lg:text-2xl font-medium">
          The unexpected way spirituality connects to climate change
        </p>
        <ul className="list-none flex flex-wrap gap-2 text-sm">
          <li className="bg-primary rounded-md px-1 py-0.5 text-white">
            environment
          </li>
          <li className="bg-primary rounded-md px-1 py-0.5 text-white">
            community
          </li>
          <li className="bg-primary rounded-md px-1 py-0.5 text-white">
            religion
          </li>
        </ul>
        <div>
          <span>Gopal D. Patel</span>
          <span className="text-gray-500 text-sm float-right lg:text-base">
            2023/11/10
          </span>
        </div>
      </div>
    </div>
  );
}

export default Talk;
