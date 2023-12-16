import data from "../../data/index.json";

export default function MyPortfolio() {
  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Recent Projects</p>
          <h2 className="section--heading">My Portfolio</h2>
        </div>
        <div>
          <button
            className="btn btn-github"
            onClick={() =>
              // blank means open in new tab
              window.open("https://github.com/kkjustadream", "_blank")
            }
          >
            {/* Use svg to draw github icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 33 33"
              fill="none"
            >
              <path
                d="M16 0C7.164 0 0 7.164 0 16c0 7.072 4.584 13.072 10.943 15.168.8.144 1.093-.344 1.093-.768 0-.376-.016-1.44-.024-2.832-4.449.96-5.375-2.144-5.375-2.144-.728-1.856-1.776-2.344-1.776-2.344-1.456-.992.112-.976.112-.976 1.6.112 2.448 1.6 2.448 1.6 1.424 2.432 3.744 1.728 4.656 1.328.144-1.056.56-1.728 1.024-2.128-3.584-.4-7.36-1.792-7.36-7.968 0-1.76.624-3.2 1.648-4.32-.176-.4-.72-2.048.144-4.256 0 0 1.344-.432 4.4 1.648A15.39 15.39 0 0116 5.52c1.376 0 2.784.192 4.048.56 3.056-2.08 4.4-1.648 4.4-1.648.864 2.208.32 3.856.16 4.256 1.024 1.12 1.632 2.56 1.632 4.32 0 6.192-3.776 7.568-7.36 7.952.576.496 1.088 1.472 1.088 2.976 0 2.144-.016 3.872-.016 4.4 0 .416.288.912 1.104.752C27.424 29.056 32 23.056 32 16c0-8.836-7.164-16-16-16z"
                fill="currentColor"
              />
            </svg>
            Visit My GitHub
          </button>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.portfolio?.map((item, index) => (
          <div
            key={index}
            className="portfolio--section--card"
            onClick={() => window.open(item.link_url)}
          >
            <div className="portfolio--section--img">
              <img src={item.src} alt="Placeholder" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
              <p className="text-sm portfolio--link">
                {item.link}
                {/* a arrow sign */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 20 19"
                  fill="none"
                >
                  <path
                    d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                    stroke="currentColor"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
