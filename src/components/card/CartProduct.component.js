import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import '../../styles/scss/cartProduct.style.scss'

const CartProduct = () => {
    return (
        <>
            <div className="card-product">
                <div className="card-product-container">
                    <div className="card-product-container__inner">
                        <div className="card-product-img-box">
                            <img src='https://www.westelm.ae/sites/g/files/bndsjb1101/files/styles/product_zoom_large_800x800/public/media/als-ecom-pimswes-prod-s3/assets/GroupProductImages/mill-ceramic-mugs-set-of-4-e2765/202112_0130_mill-ceramic-mugs-z.135985.jpg?itok=n8y0OBEC' alt='product' />
                        </div>
                        <div className="card-product-action-box">
                            <div className="card-product-action-box__name-product-group tooltip">
                                <div className="card-product-action-box__name-product">
                                    Mil ceramic mug Mil ceramic mug Mil ceramic mug
                                </div>
                                <span class="tooltip-text">Mil ceramic mug Mil ceramic mug Mil ceramic mug | 10.00$</span>
                            </div>
                            <div className="card-product-action-box__price-product-group">
                                <div className="card-product-action-box__price-product">
                                    10.00$
                                </div>
                            </div>
                            <div className="card-product-action-box__control-btn-group">

                                <div className="card-product-action-box__control-btn-group--cart">
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

export default CartProduct



