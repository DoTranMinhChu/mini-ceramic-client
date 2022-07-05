import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import '../../styles/scss/cardProduct.style.scss';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slices/cartsSlice';

const CardProduct = (props) => {
    const { product } = props
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(addToCart(product))
    }
    return (
        <>
            <div className="card-product">
                <div className="card-product-container">
                    <div className="card-product-container__inner">
                        <div className="card-product-img-box">
                            <img src={product.image} alt='product' />
                        </div>
                        <div className="card-product-action-box">
                            <div className="card-product-action-box__name-product-group tooltip">
                                <div className="card-product-action-box__name-product">
                                    {product.name}
                                </div>
                                <span className="tooltip-text">{product.name} | {product.price}$</span>
                            </div>
                            <div className="card-product-action-box__price-product-group">
                                <div className="card-product-action-box__price-product">
                                    {product.price}$
                                </div>
                            </div>
                            <div className="card-product-action-box__control-btn-group">

                                <div className="card-product-action-box__control-btn-group--cart" onClick={() => handleAddToCart()}>
                                    <FontAwesomeIcon icon={faCartArrowDown} />
                                </div>
                                <div className="card-product-action-box__control-btn-group--sold">
                                    1.23k sold
                                </div>

                            </div>
                        </div>
                        <div className="card-product-container__hover-footer">
                            Find Similar
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default CardProduct



