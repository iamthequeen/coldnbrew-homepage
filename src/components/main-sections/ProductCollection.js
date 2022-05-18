import React from 'react'

function ProductCollection() {
    const newEdition = React.useRef()
    const popular = React.useRef()
    const grinderRetro = React.useRef()
    const bestSeller = React.useRef()
        
    const initialState = {
      newEdition: true,
      popular: false,
      grinderRetro: false,
      bestSeller: false
    }
    
    const ACTIONS = {
      NEW_EDITION_CLICKED: "newEditionClicked",
      POPULAR_CLICKED: "popularClicked",
      GRINDER_RETRO_CLICKED: "grinderRetroClicked",
      BEST_SELLER_CLICKED: "bestSellerClicked"
    }
    
  const reducer = (state, action) => {
      switch (action.type) {
        case ACTIONS.NEW_EDITION_CLICKED:
          return {
            ...state,
            newEdition: true,
            popular: false,
            grinderRetro: false,
            bestSeller: false
          };
          case ACTIONS.POPULAR_CLICKED:
          return {
            ...state,
            newEdition: false,
            popular: true,
            grinderRetro: false,
            bestSeller: false
          };
           case ACTIONS.GRINDER_RETRO_CLICKED:
          return {
            ...state,
            newEdition: false,
            popular: false,
            grinderRetro: true,
            bestSeller: false
          };
           case ACTIONS.BEST_SELLER_CLICKED:
          return {
            ...state,
            newEdition: false,
            popular: false,
            grinderRetro: false,
            bestSeller: true
          };
        default: 
          return state;
      }
    }
    
  const [state, dispatch] = React.useReducer(reducer, initialState)
        
    function handleCateg1Clicked() {
      dispatch({type: ACTIONS.NEW_EDITION_CLICKED})
    }
    
    function handleCateg2Clicked() {
      dispatch({type: ACTIONS.POPULAR_CLICKED})
    }
    
    function handleCateg3Clicked() {
      dispatch({type: ACTIONS.GRINDER_RETRO_CLICKED})
    }
    
    function handleCateg4Clicked() {
      dispatch({type: ACTIONS.BEST_SELLER_CLICKED})
    }
    
    const productsData = [
      {
        id: 1,
        category: "New Edition",
        price: 139.50,
        name: "Manual Grinder New",
        feature: "Full Spectrum CBD Oil",
        imgSrc: "https://media.istockphoto.com/photos/coffee-machine-picture-id1194659852?k=20&m=1194659852&s=612x612&w=0&h=uGI2WxIuMGXqO2Hn_qunBz_DnEKqW1WMc3f_tFVQ7lg="
      },
      {
        id: 2,
        category: "New Edition",
        price: 124.90,
        name: "Electric Burr Coffee",
        feature: "Adjustable Burr Mill",
        imgSrc: "https://media.istockphoto.com/photos/kitchenware-and-food-isolated-on-white-picture-id965573598?k=20&m=965573598&s=612x612&w=0&h=upVzqXKNL_H3FnNrvfmW0EnuHG0unVHRcxNWpDPeyB8="
      },
      {
        id: 3,
        category: "New Edition",
        price: 108.59,
        name: "Feima Coffee Grinder",
        feature: "Adjustable Boe June",
        imgSrc: "https://media.istockphoto.com/photos/white-coffee-percolator-with-freshly-brewed-coffee-picture-id185245779?k=20&m=185245779&s=612x612&w=0&h=wOSRJNPDjRih6Kz6Vs9GrDy0z-w9zL9tscqutVN37hU="
      },
      {
        id: 4,
        category: "Popular",
        price: 263.00,
        name: "Moccamaster 10-Cup Coffee Maker",
        feature: "Manual drip-stop brew-basket",
        imgSrc: "https://media.istockphoto.com/photos/coffee-maker-isolated-on-white-picture-id157405611?k=20&m=157405611&s=612x612&w=0&h=U5_uRYSDhB6zmGdx-3FnrduqmpxbBdVab8udEMENuCs="
      },
      {
        id: 5,
        category: "Popular",
        price: 569.00,
        name: "Waring 8-Cup Coffee Maker",
        feature: "Controlled upper and lower warmers",
        imgSrc: "https://media.istockphoto.com/photos/coffee-maker-picture-id513996488?k=20&m=513996488&s=612x612&w=0&h=R4jXcvpiLqyOq1YaWGgwd67eEOMHxiQRIBwO3LORYsQ="
      },
      {
        id: 6,
        category: "Popular",
        price: 74.99,
        name: "Hamilton Beach FlexBrew 49980",
        feature: "Simple single-cup brewing",
        imgSrc: "https://media.istockphoto.com/photos/coffee-maker-isolated-picture-id174071089?k=20&m=174071089&s=612x612&w=0&h=Ulr-jTOppEFzRMl8dK4MPKCiPlO2D2TheJKmfBnKz3M="
      },
      {
        id: 7,
        category: "Grinder Retro",
        price: 365.00,
        name: "Ratio Six Coffee Maker",
        feature: "Unique heat shield",
        imgSrc: "https://media.istockphoto.com/photos/new-coffee-maker-picture-id157334079?k=20&m=157334079&s=612x612&w=0&h=Gh7m7_AHwGVCl3ow89bJgS80MsIsaxO7gF8_iH8eVmc="
      },
      {
        id: 8,
        category: "Grinder Retro",
        price: 99.95,
        name: "Cuisinart DCC-3200",
        feature: "14 Cup Glass Carafe",
        imgSrc: "https://media.istockphoto.com/photos/coffee-maker-isolated-picture-id487858375?k=20&m=487858375&s=612x612&w=0&h=uV6l4Tri6as4-ESHuSnZwoIA9NaSDtkVU0PgzPhMDyA="
      },
      {
        id: 9,
        category: "Grinder Retro",
        price: 144.00,
        name: "Bonavita 8-Cup One-Touch Coffee Maker",
        feature: "Adjustable Coffee Strength",
        imgSrc: "https://media.istockphoto.com/photos/coffee-maker-isolated-on-white-picture-id157405611?k=20&m=157405611&s=612x612&w=0&h=U5_uRYSDhB6zmGdx-3FnrduqmpxbBdVab8udEMENuCs="
      },
      {
        id: 10,
        category: "Best Seller",
        price: 229.99,
        name: "OXO On 9-Cup Coffee Maker",
        feature: "Integrated bloom cycle",
        imgSrc: "https://media.istockphoto.com/photos/coffee-machine-isolated-on-white-picture-id1147159644?k=20&m=1147159644&s=612x612&w=0&h=8eVhSnP712MbgNGigDkiuh2j6kNGXlokmTw9rFY0LZw="
      },
      {
        id: 11,
        category: "Best Seller",
        price: 129.98,
        name: "Ninja Specialty Coffee Maker",
        feature: "Fold-Away Frother",
        imgSrc: "https://media.istockphoto.com/photos/coffee-maker-with-fresh-brewed-coffee-isolated-picture-id486169007?k=20&m=486169007&s=612x612&w=0&h=OdAYmLeqmAQbMn_iimt7bSDSGRrpHi6EfAGK22D4YvY="
      },
      {
        id: 12,
        category: "Best Seller",
        price: 99.50,
        name: "De'Longhi Stilosa 15",
        feature: "15 bar pump",
        imgSrc: "https://media.istockphoto.com/photos/espresso-machine-picture-id104263378?k=20&m=104263378&s=612x612&w=0&h=r1G5rkUtBZnyNwPvRmvU3mZAqaWV8gJHFqaaSrfQeFM="
      }
    ]
    
    const newEditionCount = productsData.filter(productData => 
  productData.category === "New Edition").length;  
    
    const popularCount = productsData.filter(productData => 
  productData.category === "Popular").length; 
    
      const grinderRetroCount = productsData.filter(productData => 
  productData.category === "Grinder Retro").length;
    
    const bestSellerCount = productsData.filter(productData => 
  productData.category === "Best Seller").length;
   
    
    const newEditionProducts = productsData.filter(productData => 
  productData.category === "New Edition").map(productData => (
      <div className="product">
        <img src={productData.imgSrc} alt={productData.name} className="product-img"/>
        <div className="add-btn">
          <div className="plus-sign"></div>
          </div>
          <div className="product-info">
            <p className="price">$ {parseFloat(productData.price.toString()).toFixed(2)}
              </p>
            <p className="product-name">{productData.name}</p>
            <p className="product-feature">{productData.feature}</p>
          </div>
        </div>
    ))
    
    
    const popularProducts = productsData.filter(productData => 
  productData.category === "Popular").map(productData => (
      <div className="product">
        <img src={productData.imgSrc} alt={productData.name} className="product-img"/>
        <div className="add-btn">
          <div className="plus-sign"></div>
          </div>
          <div className="product-info">
            <p className="price">$ {parseFloat(productData.price.toString()).toFixed(2)}</p>
            <p className="product-name">{productData.name}</p>
            <p className="product-feature">{productData.feature}</p>
          </div>
        </div>
    ))
    
    const grinderRetroProducts = productsData.filter(productData => 
  productData.category === "Grinder Retro").map(productData => (
      <div className="product">
        <img src={productData.imgSrc} alt={productData.name} className="product-img"/>
        <div className="add-btn">
          <div className="plus-sign"></div>
          </div>
          <div className="product-info">
            <p className="price">$ {parseFloat(productData.price.toString()).toFixed(2)}</p>
            <p className="product-name">{productData.name}</p>
            <p className="product-feature">{productData.feature}</p>
          </div>
        </div>
    ))
    
    const bestSellerProducts = productsData.filter(productData => 
  productData.category === "Best Seller").map(productData => (
      <div className="product">
        <img src={productData.imgSrc} alt={productData.name} className="product-img"/>
        <div className="add-btn">
          <div className="plus-sign"></div>
          </div>
          <div className="product-info">
            <p className="price">$ {parseFloat(productData.price.toString()).toFixed(2)}
            </p>
            <p className="product-name">{productData.name}</p>
            <p className="product-feature">{productData.feature}</p>
          </div>
        </div>
    ))
    
    return (
    <section>
      <h2>Our collection of products</h2>
        <div className="product-cols">
          <div className="product-col">
        <section className="product-types">
          <div className="product-type"><h3 className={`category ${state.newEdition ? "category-clicked" : ""} `} ref={newEdition} onClick={handleCateg1Clicked} onKeyPress={handleCateg1Clicked}>New Edition</h3>
            <p>{newEditionCount} products</p>
          </div>
          <div className="product-type">
            <h3 className={`category ${state.popular ? "category-clicked" : ""} `} ref={popular} onClick={handleCateg2Clicked} onKeyPress={handleCateg2Clicked}>Popular</h3>
            <p>{popularCount} products</p>
          </div>
          <div className="product-type">
            <h3 className={`category ${state.grinderRetro ? "category-clicked" : ""} `} ref={grinderRetro} onClick={handleCateg3Clicked} onKeyPress={handleCateg2Clicked}>Grinder Retro</h3>
            <p>{grinderRetroCount} products</p>
          </div>
          <div className="product-type">
            <h3 className={`category ${state.bestSeller ? "category-clicked" : ""} `} ref={bestSeller} onClick={handleCateg4Clicked} onKeyPress={handleCateg4Clicked}>Best Seller</h3>
            <p>{bestSellerCount} products</p>
          </div>
        </section>
            </div>
          <div className="product-col">
        <div className="products">
          {state.newEdition && newEditionProducts}
          {state.popular && popularProducts}
          {state.grinderRetro && grinderRetroProducts}
          {state.bestSeller && bestSellerProducts}
            </div>
        </div>
          </div>
    </section>
    )
  }

export default ProductCollection