import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import useDeviceDetection from "@hook/useDeviceDetection";

export default function Navigation({navigation}:any) {

  const { isMobile } = useDeviceDetection();
  const router = useRouter();

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [recentSearchData, setRecentSearchData] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState<any>([]);
  const [trendingData, setTrendingData] = useState<any>("");
  const [isOpenCity, setIsOpenCity] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [isPricePage, setIsPricePage] = useState(false);
  const [text, setText] = useState();
  const [isOpen, setIsOpen] = useState<boolean>(false);


  const handleCityIsOpen = () => {
    setIsOpenCity(!isOpenCity);
  };

  const handleSearchIsOpen = () => {
    setIsOpenSearch(true);
  };

  const handleSearchIsClose = () => {
    setIsOpenSearch(false);
  };


//   const getUserCity = () => {

//     const defaultCity: any = {
//       city_id: 2485,
//       city: "New Delhi",
//       citySlug: "new-delhi",
//       ispopular: true,
//     };

//     const user_result: any = localStorage.getItem("UserData");
//     const user_res: any = JSON.parse(user_result);
//     if (user_res && user_res !== undefined) {
//       setUserValues({ ...userData, ...user_res });
//     } else {
//       setUserValues(defaultCity);
//       localStorage.setItem("UserData", JSON.stringify({ ...userData, ...defaultCity }));
//     }
//   };


//   const getTrendingSearch = async () => {
//     const trendingSearch = apiContainer.get<SearchServiceInterface>(TYPES.SearchService);
//     const search = await trendingSearch.getTrendingSearch(userData.citySlug, Utility.getCategorySingular(config.DOMAIN));
//     setTrendingData(search);
//   };

//   useEffect(() => {
//     getTrendingSearch();
//     getUserCity();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);



  useEffect(() => {
    if (router.asPath.includes("price-in")) {
      setIsPricePage(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



  const handleOpenSideBar = (e: any) => {
    if (isMobile) {
      setIsNavOpen(!isNavOpen);
    }
  };


//   const fetchSearchSuggestions = async (q: string) => {
//     const SearchSuggestions = apiContainer.get<SearchServiceInterface>(TYPES.SearchService);
//     const search = await SearchSuggestions.getSearchSuggestions(q, 6);
//     setSearchSuggestions(search);
//   };


//   const handleSearchClick = (value: any) => {
//     window.location.href = UrlHelper.toSearchBarUrl(value.url);
//   };



//   useEffect(() => {
//     const getLocalStorageData = () => {
//       const result: any = localStorage.getItem("RecentSearch");
//       const res: any = JSON.parse(result);
//       if (res !== undefined) {
//         setRecentSearchData(res);
//       }
//     };
//     getLocalStorageData();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);


  let divRef: any = useRef(null);

  useEffect(() => {
    const handler = (e: any) => {
      if (divRef.current && !divRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, []);


  return (
    <header>
      <nav className="relative px-4 py-2 lg:py-4 flex items-center bg border-b-2 border-primary z-50">
        <div className="lg:hidden">
          <button
            name="button"
            className="navbar-burger flex items-center text-blue-600"
            aria-label="Menu"
            onClick={(e) => handleOpenSideBar(e)}
          >
            <div className="flex lg:hidden w-11">
              <div className="space-y-1 my-3">
                <span className="rounded block w-5 h-0.5 bg-gray-600"></span>
                <span className="rounded block w-7 h-0.5 bg-gray-600"></span>
                <span className="rounded block w-4 h-0.5 bg-gray-600 float-right"></span>
              </div>
              
            </div>
          </button>
        </div>
        <Link
          className="text-xl pl-4 leading-none"
          href="/"
          aria-label="Home"
        >
          <Image
            alt="91trucks"
            // src={config.LOGO}
            src=""
            width="100"
            height="29"
            priority
          />
        </Link>



        {/* icon search popup */}
        {
          isMobile &&
          <div className="flex flex-row absolute top-5 right-4 justify-end place-content-end lg:flex lg:mx-auto lg:items-center ">
            <button aria-label="Search" onClick={handleSearchIsOpen} className="flex flex-row gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 26" fill="none">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M17 17L21 21" stroke="#323232" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#323232" strokeWidth="2"></path>
                </g>
              </svg>
            </button>
            {/* <UserSearch isOpen={isOpenSearch} handleSearch={handleSearchIsOpen} setIsOpen={setIsOpenSearch} /> */}
          </div>
        }

        {/* for userCity Selection */}
        <div className="flex flex-row absolute top-5 right-12 justify-end place-content-end lg:flex lg:mx-auto lg:items-center z-30">
          <button aria-label='Select City' onClick={handleCityIsOpen} className="flex flex-row gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 26">
              <g fill="none" fillRule="evenodd">
                <path d="M0 0H24V24H0z" transform="translate(0 1)" />
                <path fill="#111111" className="h-5 w-5" fillRule="nonzero" stroke="#111111" strokeWidth=".5" d="M12.373 23.833c-.2.223-.547.223-.746 0C5.883 17.413 3 12.495 3 9c0-5.276 3.724-9 9-9s9 3.724 9 9c0 3.495-2.883 8.414-8.627 14.833zM20 9c0-4.724-3.276-8-8-8S4 4.276 4 9c0 3.1 2.66 7.707 8 13.748C17.34 16.708 20 12.1 20 9zm-8-4c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm0 1c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z" transform="translate(0 1)" />
              </g>
            </svg>
            {/* {
              !isMobile &&
              <span className="cursor-pointer items-center text-sm">
                {userData?.city}
              </span>
            }
        <SelectUserCity isOpen={isOpenCity} handleCity={handleCityIsOpen} setIsOpen={setIsOpenCity} isPricePage={isPricePage} /> */}
        </button>
        </div>


        {!isMobile && (
          <>
            <ul className="z-10 hidden absolute top-1/2 right-40 transform -translate-y-1/2  lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-12">
            
              <li className="relative">
                <div className="bg-white text-gray-600 h-4 w-96 -z-10 overflow-visible ml-20 -mt-6  rounded " >
                  {/* <SearchBar
                    recentSearchData={recentSearchData}
                    label='Search Trucks, Buses, ThreeWheelers.'
                    fetchSuggestions={fetchSearchSuggestions}
                    initialData={trendingData}
                    suggestionData={searchSuggestions}
                    handleChange={handleSearchClick}
                    q={text}
                    setQ={setText}
                    listheight="280px"
                    isOpenSearch={isOpen}
                    setIsOpenSearch={setIsOpen}
                  /> */}
                </div>
              </li>

              {navigation.map((nav:any, index:any) => {
                return (
                  <li key={index}>
                    <div className="dropdown inline-block relative">
                      <button name="button" className="font-semibold uppercase text-sm text-gray-600 hover:text-gray-500 inline-flex items-center">
                        {nav.name}
                      </button>
                      <ul className="dropdown-content absolute hidden text-sm text-gray-600 min-w-min w-44 bg-white divide-y divide-gray-200 border rounded">
                        {nav.items.map((item:any, index:any) => {
                          return item.items.length > 0 ? (
                            <li
                              key={index}
                              className="dropdown  hover:text-primary"
                            >
                              <button name="button" className="w-full hover:bg-gray-100 py-4 px-4 text-left  whitespace-no-wrap">
                                {item.name}
                              </button>
                              <ul className="border rounded dropdown-content absolute hidden text-gray-600 -ml-44 -mt-10 w-44 divide-y divide-gray-200">
                                {item.items.map((itm:any, idx:any) => {
                                  return (
                                    <li
                                      key={idx}
                                      className="bg-white hover:text-primary hover:bg-gray-100"
                                    >
                                      <Link
                                        className="py-4 px-4 block whitespace-no-wrap"
                                        href={itm.url}
                                      >
                                        {itm.name}
                                      </Link>
                                    </li>
                                  );
                                })}
                              </ul>
                            </li>
                          ) : (
                            <li
                              key={index}
                              className="first:pt-0 last:pb-0 hover:bg-gray-100 hover:text-primary"
                            >
                              <Link
                                className="rounded-t py-4 px-4 block whitespace-no-wrap"
                                href={item.url}
                              >
                                {item.name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </nav>

      {/* <!-- Mobile Menu Starts --> */}

      {isMobile && (
        <div
          className={
            isNavOpen
              ? "navbar-menu relative z-50"
              : "navbar-menu relative z-50 hidden"
          }
        >
          <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>

          <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
            <div className="flex items-center mb-8">
              <Link
                className="mr-auto text-3xl font-bold leading-none"
                href="/"
              >
                <Image
                  alt="91trucks"
                //   src="https://images.91wheels.com/images/cv-images/newtheme/91trucks-logo.png"
                src=""
                  width="100"
                  height="29"
                  priority
                />
              </Link>

              <button className="navbar-close" name="close" onClick={(e) => handleOpenSideBar(e)}>
                <svg
                  className="h-6 w-6 text-gray-600 cursor-pointer hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>

            <div>
              <ul className="transform divide-y divide-gray-200 text-sm text-gray-600 font-semibold uppercase -mx-6">
                {navigation.map((nav:any, index:any) => {
                  return (
                    <li key={index}>
                      <div className="dropdown inline-block">
                        <button name="nav button" className=" hover:text-gray-500 inline-flex place-content-between w-[310px] p-4">
                          {nav.name}{" "}
                          <svg
                            height="20px"
                            clipRule="evenodd"
                            fillRule="evenodd"
                            strokeLinejoin="round"
                            strokeMiterlimit="2"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="m16.843 10.211c.108-.141.157-.3.157-.456 0-.389-.306-.755-.749-.755h-8.501c-.445 0-.75.367-.75.755 0 .157.05.316.159.457 1.203 1.554 3.252 4.199 4.258 5.498.142.184.36.29.592.29.23 0 .449-.107.591-.291 1.002-1.299 3.044-3.945 4.243-5.498z" />
                          </svg>
                        </button>
                        <ul className="dropdown-content hidden text-sm text-gray-600 bg-white divide-y divide-gray-200">
                          {nav.items.map((item:any, index:any) => {
                            return (
                              <>
                                {/* <li key={index} className="first:pt-0 last:pb-0"><a className="rounded-t py-4 px-6 block whitespace-no-wrap" href="#">{item.name}</a></li> */}

                                {item.items.length > 0 ? (
                                  <li key={index} className="dropdown">
                                    <Link
                                      className="py-4 px-6 flex whitespace-no-wrap place-content-between"
                                      href={item.url}
                                    >
                                      {item.name}{" "}
                                      <svg
                                        height="20px"
                                        clipRule="evenodd"
                                        fillRule="evenodd"
                                        strokeLinejoin="round"
                                        strokeMiterlimit="2"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path d="m16.843 10.211c.108-.141.157-.3.157-.456 0-.389-.306-.755-.749-.755h-8.501c-.445 0-.75.367-.75.755 0 .157.05.316.159.457 1.203 1.554 3.252 4.199 4.258 5.498.142.184.36.29.592.29.23 0 .449-.107.591-.291 1.002-1.299 3.044-3.945 4.243-5.498z" />
                                      </svg>
                                    </Link>
                                    <ul className="dropdown-content hidden text-gray-600 mx-0 divide-y divide-gray-200 w-full">
                                      {item.items.map((itm:any, idx:any) => {
                                        return (
                                          <>
                                            <li key={idx} className="bg-white">
                                              <Link
                                                className="py-4 px-8 block whitespace-no-wrap"
                                                href={itm.url}
                                              >
                                                {itm.name}
                                              </Link>
                                            </li>
                                          </>
                                        );
                                      })}
                                    </ul>
                                  </li>
                                ) : (
                                  <li key={index} className="dropdown">
                                    <Link
                                      className="py-4 px-6 flex whitespace-no-wrap place-content-between"
                                      href={item.url}
                                    >
                                      {item.name}
                                    </Link>
                                  </li>
                                )}
                                {/* <li className=" hover:text-primary"><a className="rounded-b hover:bg-gray-100 py-4 px-6 block whitespace-no-wrap" href="#">Option 4</a></li> */}
                              </>
                            );
                          })}
                        </ul>
                      </div>
                    </li>
                  );
                })}
              </ul>

            </div>

            <div className="mt-auto">
              <p className="my-4 text-xs text-center text-gray-600">
                <span>Copyright © 2022</span>
              </p>
            </div>
          </nav>

        </div>

      )}
    </header>
  );
}
