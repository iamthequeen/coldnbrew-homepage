import React, {useRef, useReducer} from 'react'

function ProductCollection() {
    const newEdition = useRef()
    const popular = useRef()
    const grinderRetro = useRef()
    const bestSeller = useRef()
        
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
    
  const [state, dispatch] = useReducer(reducer, initialState)
        
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
        imgSrc: "images/coffee-machines/new-edition/manualGrinder.png"
      },
      {
        id: 2,
        category: "New Edition",
        price: 124.90,
        name: "Electric Burr Coffee",
        feature: "Adjustable Burr Mill",
        imgSrc: "images/coffee-machines/new-edition/electricBurr.png"
      },
      {
        id: 3,
        category: "New Edition",
        price: 108.59,
        name: "Feima Coffee Grinder",
        feature: "Adjustable Boe June",
        imgSrc: "images/coffee-machines/new-edition/feimaCoffee.png"
      },
      {
        id: 4,
        category: "Popular",
        price: 263.00,
        name: "Moccamaster 10-Cup Coffee Maker",
        feature: "Manual drip-stop brew-basket",
        imgSrc: "images/coffee-machines/popular/moccamaster.png"
      },
      {
        id: 5,
        category: "Popular",
        price: 569.00,
        name: "Waring 8-Cup Coffee Maker",
        feature: "Controlled upper and lower warmers",
        imgSrc: "images/coffee-machines/popular/waring.png"
      },
      {
        id: 6,
        category: "Popular",
        price: 74.99,
        name: "Hamilton Beach FlexBrew 49980",
        feature: "Simple single-cup brewing",
        imgSrc: "images/coffee-machines/popular/hamiltonBeach.png"
      },
      {
        id: 7,
        category: "Grinder Retro",
        price: 365.00,
        name: "Ratio Six Coffee Maker",
        feature: "Unique heat shield",
        imgSrc: "images/coffee-machines/grinder-retro/ratioSix.png"
      },
      {
        id: 8,
        category: "Grinder Retro",
        price: 99.95,
        name: "Cuisinart DCC-3200",
        feature: "14 Cup Glass Carafe",
        imgSrc: "images/coffee-machines/grinder-retro/cuisinart.png"
      },
      {
        id: 9,
        category: "Grinder Retro",
        price: 144.00,
        name: "Bonavita 8-Cup One-Touch Coffee Maker",
        feature: "Adjustable Coffee Strength",
        imgSrc: "images/coffee-machines/grinder-retro/bonavita.png"
      },
      {
        id: 10,
        category: "Best Seller",
        price: 229.99,
        name: "OXO On 9-Cup Coffee Maker",
        feature: "Integrated bloom cycle",
        imgSrc: "images/coffee-machines/best-seller/oxoOn.png"
      },
      {
        id: 11,
        category: "Best Seller",
        price: 129.98,
        name: "Ninja Specialty Coffee Maker",
        feature: "Fold-Away Frother",
        imgSrc: "images/coffee-machines/best-seller/ninjaSpecialty.png"
      },
      {
        id: 12,
        category: "Best Seller",
        price: 99.50,
        name: "De'Longhi Stilosa 15",
        feature: "15 bar pump",
        imgSrc: "images/coffee-machines/best-seller/delonghi.png"
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
    <section className='product-collection'>
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