import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import './UserReviews.css'
import picture from '../../icons/user-page-icons/picture.svg';
import pencil from '../../icons/user-page-icons/pencil.svg';
import trash from '../../icons/user-page-icons/trash.svg';
import x from '../../icons/x.svg';
import broken from '../../icons/broken.png';
import * as reviewActions from "../../store/reviews";



export default function UserReviews({ user, userReviews }) {
    const dispatch = useDispatch();


    const formatDate = (date) => {
        date = new Date(date)

        const mm = date.getMonth() + 1;
        const dd = date.getDate();
        const yyyy = date.getFullYear();
        return `${mm}/${dd}/${yyyy}`;
    }

    const deleteReviewHandler = (reviewId) => {
        try {
            dispatch(reviewActions.deleteReview(reviewId));
        }

        catch (res) {
            const data = res.json();
            if (data) console.log(data);
        }
    }

    const deleteImgHandler = (reviewId, reviewImgId) => {
        try {
            dispatch(reviewActions.deleteReviewImg(reviewId, reviewImgId));
        }

        catch (res) {
            const data = res.json();
            if (data) console.log(data);
        }
    }


    if (!userReviews || !Object.values(userReviews).length) {
        return (
            <div>
                <h2 id='mid-title'>Reviews</h2>
                <div>You haven't made any reviews yet.</div>
            </div>
        )
    }

    else return (
        <div>
            <h2 id='mid-title'>Reviews</h2>
            <div className="all-user-reviews">
                {userReviews && Object.values(userReviews).map(review => (
                    <div className="single-user-review-card" key={review.id}>
                        <div className="user-review-biz-info">
                            <NavLink exact to={`/biz/${review.Business.id}`}>
                                <img className="user-review-biz-img" src={review.Business.PreviewImage?.url} alt={review.Business.name} onError={e => e.target.src=broken} />
                            </NavLink>
                            <div className="user-review-biz-text">
                                <NavLink className="user-review-biz-link" exact to={`/biz/${review.Business.id}`}>
                                    <div className="user-review-biz-name">{review.Business.name}</div>
                                </NavLink>
                                <div className="user-review-biz-price-range">{review.Business.price_range}</div>
                                <div className="user-review-biz-address">{review.Business.address}</div>
                                <div className="user-review-biz-city-state-zip">
                                    <span className="user-review-biz-city">{review.Business.city},</span>
                                    <span className="user-review-biz-state">{review.Business.state}</span>
                                    <span className="user-review-biz-zip">{review.Business.zipcode}</span>
                                </div>
                            </div>
                        </div>
                        <div className="user-review-review-info">
                            <div className="user-review-rating-date">
                                <div className="user-review-rating">
                                    {/* FIRST STAR */}
                                    <svg className='first-star' width="20" height="20" viewBox="0 0 20 20">
                                        <path fill={review.rating >= 4.8 ? "rgba(251,67,60,1)" : review.rating >= 4.3 ? 'rgba(255, 100, 61, 1)' : review.rating >= 3.8 ? 'rgba(255, 100, 61, 1)' : review.rating >= 3.3 ? 'rgba(255, 135, 66, 1)' : review.rating >= 2.8 ? 'rgba(255, 135, 66, 1)' : review.rating >= 2.3 ? 'rgba(255, 173, 72, 1)' : review.rating >= 1.8 ? 'rgba(255, 173, 72, 1)' : review.rating >= 1.3 ? 'rgba(255, 204, 75, 1)' : review.rating > 0 ? 'rgba(255, 204, 75, 1)' : 'rgba(187, 186, 192, 0.5)'}
                                            d="M0 4C0 1.79086 1.79086 0 4 0H10V20H4C1.79086 20 0 18.2091 0 16V4Z">
                                        </path>
                                        <path fill={review.rating >= 4.8 ? "rgba(251,67,60,1)" : review.rating >= 4.3 ? 'rgba(255, 100, 61, 1)' : review.rating >= 3.8 ? 'rgba(255, 100, 61, 1)' : review.rating >= 3.3 ? 'rgba(255, 135, 66, 1)' : review.rating >= 2.8 ? 'rgba(255, 135, 66, 1)' : review.rating >= 2.3 ? 'rgba(255, 173, 72, 1)' : review.rating >= 1.8 ? 'rgba(255, 173, 72, 1)' : review.rating >= 1.3 ? 'rgba(255, 204, 75, 1)' : review.rating > 0 ? 'rgba(255, 204, 75, 1)' : 'rgba(187, 186, 192, 0.5)'}
                                            d="M20 4C20 1.79086 18.2091 0 16 0H10V20H16C18.2091 20 20 18.2091 20 16V4Z">
                                        </path>
                                        <path fill="white" fillRule="evenodd" clipRule="evenodd"
                                            d="M10 13.3736L12.5949 14.7111C12.7378 14.7848 12.9006 14.8106 13.0593
                                            14.7847C13.4681 14.718 13.7454 14.3325 13.6787 13.9237L13.2085 11.0425L15.2824
                                            8.98796C15.3967 8.8748 15.4715 8.72792 15.4959 8.569C15.5588 8.15958 15.2779
                                            7.77672 14.8685 7.71384L11.983 7.2707L10.6699 4.66338C10.5975 4.51978 10.481
                                            4.40322 10.3374 4.33089C9.96742 4.14458 9.51648 4.29344 9.33017 4.66338L8.01705
                                            7.2707L5.13157 7.71384C4.97265 7.73825 4.82577 7.81309 4.71261 7.92731C4.42109
                                            8.22158 4.42332 8.69645 4.71759 8.98796L6.79152 11.0425L6.32131 13.9237C6.29541
                                            14.0824 6.3212 14.2452 6.39486 14.3881C6.58464 14.7563 7.03696 14.9009 7.40514
                                            14.7111L10 13.3736Z">
                                        </path>
                                    </svg>
                                    {/* SECOND STAR */}
                                    <svg className='middle-star' width="20" height="20" viewBox="0 0 20 20">
                                        <path fill={review.rating >= 4.8 ? "rgba(251,67,60,1)" : review.rating >= 4.3 ? 'rgba(255, 100, 61, 1)' : review.rating >= 3.8 ? 'rgba(255, 100, 61, 1)' : review.rating >= 3.3 ? 'rgba(255, 135, 66, 1)' : review.rating >= 2.8 ? 'rgba(255, 135, 66, 1)' : review.rating >= 2.3 ? 'rgba(255, 173, 72, 1)' : review.rating >= 1.8 ? 'rgba(255, 173, 72, 1)' : review.rating >= 1.3 ? 'rgba(255, 204, 75, 1)' : 'rgba(187, 186, 192, 0.5)'}
                                            d="M0 4C0 1.79086 1.79086 0 4 0H10V20H4C1.79086 20 0 18.2091 0 16V4Z">
                                        </path>
                                        <path fill={review.rating >= 4.8 ? "rgba(251,67,60,1)" : review.rating >= 4.3 ? 'rgba(255, 100, 61, 1)' : review.rating >= 3.8 ? 'rgba(255, 100, 61, 1)' : review.rating >= 3.3 ? 'rgba(255, 135, 66, 1)' : review.rating >= 2.8 ? 'rgba(255, 135, 66, 1)' : review.rating >= 2.3 ? 'rgba(255, 173, 72, 1)' : review.rating >= 1.8 ? 'rgba(255, 173, 72, 1)' : 'rgba(187, 186, 192, 0.5)'}
                                            d="M20 4C20 1.79086 18.2091 0 16 0H10V20H16C18.2091 20 20 18.2091 20 16V4Z">
                                        </path>
                                        <path fill="white" fillRule="evenodd" clipRule="evenodd"
                                            d="M10 13.3736L12.5949 14.7111C12.7378 14.7848 12.9006 14.8106 13.0593
                                            14.7847C13.4681 14.718 13.7454 14.3325 13.6787 13.9237L13.2085 11.0425L15.2824
                                            8.98796C15.3967 8.8748 15.4715 8.72792 15.4959 8.569C15.5588 8.15958 15.2779
                                            7.77672 14.8685 7.71384L11.983 7.2707L10.6699 4.66338C10.5975 4.51978 10.481
                                            4.40322 10.3374 4.33089C9.96742 4.14458 9.51648 4.29344 9.33017 4.66338L8.01705
                                            7.2707L5.13157 7.71384C4.97265 7.73825 4.82577 7.81309 4.71261 7.92731C4.42109
                                            8.22158 4.42332 8.69645 4.71759 8.98796L6.79152 11.0425L6.32131 13.9237C6.29541
                                            14.0824 6.3212 14.2452 6.39486 14.3881C6.58464 14.7563 7.03696 14.9009 7.40514
                                            14.7111L10 13.3736Z">
                                        </path>
                                    </svg>
                                    {/* THIRD STAR */}
                                    <svg className='middle-star' width="20" height="20" viewBox="0 0 20 20">
                                        <path fill={review.rating >= 4.8 ? "rgba(251,67,60,1)" : review.rating >= 4.3 ? 'rgba(255, 100, 61, 1)' : review.rating >= 3.8 ? 'rgba(255, 100, 61, 1)' : review.rating >= 3.3 ? 'rgba(255, 135, 66, 1)' : review.rating >= 2.8 ? 'rgba(255, 135, 66, 1)' : review.rating >= 2.3 ? 'rgba(255, 173, 72, 1)' : 'rgba(187, 186, 192, 0.5)'}
                                            d="M0 4C0 1.79086 1.79086 0 4 0H10V20H4C1.79086 20 0 18.2091 0 16V4Z">
                                        </path>
                                        <path fill={review.rating >= 4.8 ? "rgba(251,67,60,1)" : review.rating >= 4.3 ? 'rgba(255, 100, 61, 1)' : review.rating >= 3.8 ? 'rgba(255, 100, 61, 1)' : review.rating >= 3.3 ? 'rgba(255, 135, 66, 1)' : review.rating >= 2.8 ? 'rgba(255, 135, 66, 1)' : 'rgba(187, 186, 192, 0.5)'}
                                            d="M20 4C20 1.79086 18.2091 0 16 0H10V20H16C18.2091 20 20 18.2091 20 16V4Z">
                                        </path>
                                        <path fill="white" fillRule="evenodd" clipRule="evenodd"
                                            d="M10 13.3736L12.5949 14.7111C12.7378 14.7848 12.9006 14.8106 13.0593
                                            14.7847C13.4681 14.718 13.7454 14.3325 13.6787 13.9237L13.2085 11.0425L15.2824
                                            8.98796C15.3967 8.8748 15.4715 8.72792 15.4959 8.569C15.5588 8.15958 15.2779
                                            7.77672 14.8685 7.71384L11.983 7.2707L10.6699 4.66338C10.5975 4.51978 10.481
                                            4.40322 10.3374 4.33089C9.96742 4.14458 9.51648 4.29344 9.33017 4.66338L8.01705
                                            7.2707L5.13157 7.71384C4.97265 7.73825 4.82577 7.81309 4.71261 7.92731C4.42109
                                            8.22158 4.42332 8.69645 4.71759 8.98796L6.79152 11.0425L6.32131 13.9237C6.29541
                                            14.0824 6.3212 14.2452 6.39486 14.3881C6.58464 14.7563 7.03696 14.9009 7.40514
                                            14.7111L10 13.3736Z">
                                        </path>
                                    </svg>
                                    {/* FOURTH STAR */}
                                    <svg className='middle-star' width="20" height="20" viewBox="0 0 20 20">
                                        <path fill={review.rating >= 4.8 ? "rgba(251,67,60,1)" : review.rating >= 4.3 ? 'rgba(255, 100, 61, 1)' : review.rating >= 3.8 ? 'rgba(255, 100, 61, 1)' : review.rating >= 3.3 ? 'rgba(255, 135, 66, 1)' : 'rgba(187, 186, 192, 0.5)'}
                                            d="M0 4C0 1.79086 1.79086 0 4 0H10V20H4C1.79086 20 0 18.2091 0 16V4Z">
                                        </path>
                                        <path fill={review.rating >= 4.8 ? "rgba(251,67,60,1)" : review.rating >= 4.3 ? 'rgba(255, 100, 61, 1)' : review.rating >= 3.8 ? 'rgba(255, 100, 61, 1)' : 'rgba(187, 186, 192, 0.5)'}
                                            d="M20 4C20 1.79086 18.2091 0 16 0H10V20H16C18.2091 20 20 18.2091 20 16V4Z">
                                        </path>
                                        <path fill="white" fillRule="evenodd" clipRule="evenodd"
                                            d="M10 13.3736L12.5949 14.7111C12.7378 14.7848 12.9006 14.8106 13.0593
                                            14.7847C13.4681 14.718 13.7454 14.3325 13.6787 13.9237L13.2085 11.0425L15.2824
                                            8.98796C15.3967 8.8748 15.4715 8.72792 15.4959 8.569C15.5588 8.15958 15.2779
                                            7.77672 14.8685 7.71384L11.983 7.2707L10.6699 4.66338C10.5975 4.51978 10.481
                                            4.40322 10.3374 4.33089C9.96742 4.14458 9.51648 4.29344 9.33017 4.66338L8.01705
                                            7.2707L5.13157 7.71384C4.97265 7.73825 4.82577 7.81309 4.71261 7.92731C4.42109
                                            8.22158 4.42332 8.69645 4.71759 8.98796L6.79152 11.0425L6.32131 13.9237C6.29541
                                            14.0824 6.3212 14.2452 6.39486 14.3881C6.58464 14.7563 7.03696 14.9009 7.40514
                                            14.7111L10 13.3736Z">
                                        </path>
                                    </svg>
                                    {/* FIFTH STAR */}
                                    <svg className='last-star' width="20" height="20" viewBox="0 0 20 20">
                                        <path fill={review.rating >= 4.8 ? "rgba(251,67,60,1)" : review.rating >= 4.3 ? 'rgba(255, 100, 61, 1)' : 'rgba(187, 186, 192, 0.5)'}
                                            d="M0 4C0 1.79086 1.79086 0 4 0H10V20H4C1.79086 20 0 18.2091 0 16V4Z">
                                        </path>
                                        <path fill={review.rating >= 4.8 ? "rgba(251,67,60,1)" : 'rgba(187, 186, 192, 0.5)'}
                                            d="M20 4C20 1.79086 18.2091 0 16 0H10V20H16C18.2091 20 20 18.2091 20 16V4Z">
                                        </path>
                                        <path fill="white" fillRule="evenodd" clipRule="evenodd"
                                            d="M10 13.3736L12.5949 14.7111C12.7378 14.7848 12.9006 14.8106 13.0593
                                            14.7847C13.4681 14.718 13.7454 14.3325 13.6787 13.9237L13.2085 11.0425L15.2824
                                            8.98796C15.3967 8.8748 15.4715 8.72792 15.4959 8.569C15.5588 8.15958 15.2779
                                            7.77672 14.8685 7.71384L11.983 7.2707L10.6699 4.66338C10.5975 4.51978 10.481
                                            4.40322 10.3374 4.33089C9.96742 4.14458 9.51648 4.29344 9.33017 4.66338L8.01705
                                            7.2707L5.13157 7.71384C4.97265 7.73825 4.82577 7.81309 4.71261 7.92731C4.42109
                                            8.22158 4.42332 8.69645 4.71759 8.98796L6.79152 11.0425L6.32131 13.9237C6.29541
                                            14.0824 6.3212 14.2452 6.39486 14.3881C6.58464 14.7563 7.03696 14.9009 7.40514
                                            14.7111L10 13.3736Z">
                                        </path>
                                    </svg>
                                </div>
                                <div className="user-review-created-at">{formatDate(review.created_at)}</div>
                            </div>
                            <p className="user-review-review-body">{review.review_body}</p>


                            <div className="user-review-imgs">
                                {review.Review_Images?.length > 0 && review.Review_Images.map(img => (
                                    <div className="user-review-img-container" onClick={() => deleteImgHandler(review.id, img.id)}>
                                        <img className="user-review-svg-x" src={x} width='100px' alt="x_svg" onError={e => e.target.src=broken} />
                                        <img className="user-review-img" key={img.id} src={img.url} alt={img.url} onError={e => e.target.src=broken} />
                                    </div>
                                ))}
                            </div>
                        </div>


                        <div className="user-review-edit-delete-icons">
                            <NavLink className="user-review-add-img-button" to={`/review/${review.id}/images/new`}>
                                <img className="user-review-svg" src={picture} width='16px' alt="pic_svg" onError={e => e.target.src=broken} />
                            </NavLink>
                            <NavLink className="user-review-edit-button" exact to={`/biz/${review.business_id}/review/${review.id}`}>
                                <img className="user-review-svg" src={pencil} width='16px' alt="pencil_svg" onError={e => e.target.src=broken} />
                            </NavLink>
                            <div className="user-review-delete-button" onClick={() => deleteReviewHandler(review.id)}>
                                <img className="user-review-svg" src={trash} width='16px' alt="trash_svg" onError={e => e.target.src=broken} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

}
