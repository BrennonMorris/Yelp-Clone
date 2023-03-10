import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import * as reviewActions from "../../store/reviews";
import './CreateReviewImgForm.css'
import broken from '../../icons/broken.png';

export default function CreateReviewImgForm() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { reviewId } = useParams();
    const sessionUser = useSelector(state => state.session.user);
    const userReviews = useSelector(state => state.reviews.user);

    const [image, setImage] = useState(null);
    const [imageLoading, setImageLoading] = useState(false);

    const [validationErrors, setValidationErrors] = useState([]);

    if (!sessionUser) {
        alert("Please log in or create an account to add an image to your review.");
        history.push("/");
    }

    // LOAD review BY PARAMETER review ID
    useEffect(() => {
        dispatch(reviewActions.getUserReviews());

        return () => dispatch(reviewActions.clearData());
    }, [dispatch, reviewId]);

    // TODO: ADD MORE VALIDATION ERROR HANDLING
    useEffect(() => {
        const errors = [];

        setValidationErrors(errors);
    }, [image]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // ERROR HANDLING FOR REVIEW IS NOT OWNED BY USER:
        if (userReviews) {
            const userReviewIdsList = Object.keys(userReviews);
            if (!userReviewIdsList.includes(reviewId)) {
                alert("Only the review owner can add images to his or her review.");
                history.push("/");
                return;
            }
        }

        try {
            // const createdImg = await dispatch(reviewActions.createReviewImg(reviewId, newImg));
            // if (createdImg) setValidationErrors([]);
            // history.push(`/reviews/current`);

            const formData = new FormData();
            formData.append("image", image);

            setImageLoading(true);

            const responseAddImg = await fetch(`/api/reviews/${reviewId}/images`, {
                method: 'POST',
                body: formData
            });

            if (responseAddImg.json()) {
                setImageLoading(false);
                setValidationErrors([]);
                history.push(`/reviews/current`);
            }
        }
        catch (res) {
            console.log("==>ANY ERRORS FROM CREATE REVIEW IMG:", res)
            // const data = await res.json();
            // if (data && data.errors) return setValidationErrors(data.errors);
        }
    };

    return (
        <div className='form form--add-review-img'>
            <h1 className='header header--add-review-img'>Hello! Let's add an image to your review</h1>

            <form onSubmit={handleSubmit} className="form" id="form--add-review-img">
                {validationErrors.length > 0 && (
                    <ul className="list list--errors">
                        {validationErrors.map((error) => <li key={error} className="li li--error">{error}</li>)}
                    </ul>
                )}

                <div className='container--form-fields'>
                    {/* ----- review IMG SECTION ----- */}
                    <div className='container--form-fields--section container--form-fields--img-section'>
                        <label className='label--add-review-img' htmlFor="form-field--img">Review Preview Image:</label>
                        <input
                            type="file"
                            // value={imnulle}
                            onChange={(e) => setImage(e.target.files[0])}
                            required
                            // placeholder='Business Image url'
                            className='form-field'
                            id='form-field--img'
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={validationErrors.length}
                    className='button button--submit'
                    id='add-review-img-submit-button'
                >
                    Submit
                </button>
                {(imageLoading)&& <p>Loading...</p>}
            </form>
        </div>
    );
}
