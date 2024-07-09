import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
          alt="Logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const RestaurantCard = ({ restaurant }) => {
    const { name, cuisines, costForTwo, avgRating, sla, cloudinaryImageId } = restaurant;
  
    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="res-logo"
          alt="res-logo"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        />
        <h3>{name}</h3> {/* Directly using name here */}
        <h4>{cuisines.join(", ")}</h4>
        <h4>{costForTwo}</h4>
        <h4>{avgRating} Stars</h4>
        <h4>{sla.deliveryTime} minutes</h4>
      </div>
    );
  };
const resList = {
    restaurants: [
        {
          info: {
            id: "704921",
            name: "Chinese Wok",
            cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
            locality: "Ravipuram",
            areaName: "M G Road",
            costForTwo: "₹250 for two",
            cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
            avgRating: 4.2,
            parentId: "61955",
            avgRatingString: "4.2",
            totalRatingsString: "1K+",
            sla: {
              deliveryTime: 46,
              lastMileTravel: 7.4,
              serviceability: "SERVICEABLE",
              slaString: "45-50 mins",
              lastMileTravelString: "7.4 km",
              iconType: "ICON_TYPE_EMPTY"
            },
            availability: {
              nextCloseTime: "2024-06-18 01:00:00",
              opened: true
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
              entityBadges: {
                imageBased: {},
                textBased: {},
                textExtendedBadges: {}
              }
            },
            aggregatedDiscountInfoV3: {
              header: "ITEMS",
              subHeader: "AT ₹179"
            },
            differentiatedUi: {
              displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              differentiatedUiMediaDetails: {
                mediaType: "ADS_MEDIA_ENUM_IMAGE",
                lottie: {},
                video: {}
              }
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {}
          },
          analytics: {},
          cta: {
            link: "https://www.swiggy.com/restaurants/chinese-wok-ravipuram-m-g-road-kochi-704921",
            type: "WEBLINK"
          }
        },
        {
            "info": {
              "id": "240093",
              "name": "Pizza Hut",
              "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
              "locality": "Fort Kochi",
              "areaName": "Fort Kochi",
              "costForTwo": "₹350 for two",
              "cuisines": [
                "Pizzas"
              ],
              "avgRating": 4.3,
              "parentId": "721",
              "avgRatingString": "4.3",
              "totalRatingsString": "1K+",
              "sla": {
                "deliveryTime": 39,
                "lastMileTravel": 6.4,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "6.4 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-06-18 01:00:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "Rxawards/_CATEGORY-Pizza.png",
                    "description": "Delivery!"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "Delivery!",
                          "imageId": "Rxawards/_CATEGORY-Pizza.png"
                        }
                      }
                    ]
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹199"
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/pizza-hut-fort-kochi-kochi-240093",
              "type": "WEBLINK"
            }
          },
          {
            "info": {
              "id": "89572",
              "name": "UBQ by Barbeque Nation",
              "cloudinaryImageId": "rrh9bulv6vcj4ebduth7",
              "locality": "Kacheripadi",
              "areaName": "Kacheripadi",
              "costForTwo": "₹300 for two",
              "cuisines": [
                "North Indian",
                "Barbecue",
                "Biryani",
                "Kebabs",
                "Mughlai",
                "Desserts"
              ],
              "avgRating": 4,
              "parentId": "10804",
              "avgRatingString": "4.0",
              "totalRatingsString": "5K+",
              "sla": {
                "deliveryTime": 60,
                "lastMileTravel": 10.5,
                "serviceability": "SERVICEABLE",
                "slaString": "55-60 mins",
                "lastMileTravelString": "10.5 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-06-17 16:30:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/ubq-by-barbeque-nation-kacheripadi-kochi-89572",
              "type": "WEBLINK"
            }
          },
          {
            "info": {
              "id": "301957",
              "name": "Barbeque Nation",
              "cloudinaryImageId": "yv7fq1ypyq9eht2rsafk",
              "locality": "Kacheripadi",
              "areaName": "Kacheripadi",
              "costForTwo": "₹600 for two",
              "cuisines": [
                "Barbecue",
                "Biryani",
                "Kebabs",
                "Mughlai",
                "Desserts"
              ],
              "avgRating": 4.1,
              "parentId": "2438",
              "avgRatingString": "4.1",
              "totalRatingsString": "1K+",
              "sla": {
                "deliveryTime": 60,
                "lastMileTravel": 10.5,
                "serviceability": "SERVICEABLE",
                "slaString": "55-60 mins",
                "lastMileTravelString": "10.5 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-06-17 16:30:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/barbeque-nation-kacheripadi-kochi-301957",
              "type": "WEBLINK"
            }
          },
          {
            "info": {
              "id": "367962",
              "name": "La Pino'z Pizza",
              "cloudinaryImageId": "fallovrabd8hftqphizq",
              "locality": "Elamkulam",
              "areaName": "Elamkulam",
              "costForTwo": "₹300 for two",
              "cuisines": [
                "Pizzas",
                "Pastas",
                "Italian",
                "Desserts",
                "Beverages"
              ],
              "avgRating": 4.3,
              "parentId": "4961",
              "avgRatingString": "4.3",
              "totalRatingsString": "10K+",
              "sla": {
                "deliveryTime": 47,
                "lastMileTravel": 9.5,
                "serviceability": "SERVICEABLE",
                "slaString": "45-50 mins",
                "lastMileTravelString": "9.5 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-06-18 03:00:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-elamkulam-kochi-367962",
              "type": "WEBLINK"
            }
          }
          
      ]
};

const Body = () => {
    return (
      <div className="body">
        <div className="search">Search bar</div>
        <div className="res-container">
        {resList.restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} restaurant={restaurant.info} />
        ))}
        </div>
      </div>
    );
  };
  

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
