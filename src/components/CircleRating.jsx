import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const CircleRating = ({rating, className}) => {
  return (
    <div className={`p-[3px] bg-white rounded-full ${className}`}>
            <CircularProgressbar
                className='font-bold'
                value={rating}
                maxValue={10}
                text={rating}
                styles={buildStyles({
                    pathColor:
                        rating < 5 ? "red" : rating < 7 ? "orange" : "green",
                    textColor: "black",
                    backgroundColor: "white",
                    trailColor: "white",
                    textSize: "35px",
                    pathTransitionDuration: 1
                })}
            />
        </div>
  )
}

export default CircleRating