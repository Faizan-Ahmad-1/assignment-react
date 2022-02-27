import hero from '../../assets/Images/bg_hero.png';
import { styles } from './HeroStyle';
import { Carousel } from 'react-bootstrap';
import Next from '../buttons/next/Next';
import Back from '../buttons/back/Back';
import {mystyle} from './FeaturepjStyle';
export default function Hero() {

    return (
        <div>
            <div style={styles.textContainer}><p style={styles.text1}>Building things is our mission.</p><div style={styles.featurePj}>
                <div style={mystyle.featurePj} >

                </div>
                <div>
                    <Back />
                </div>
                <div>
                    <Next />
                </div>

            </div></div>
            <img src={hero} style={styles.img} />
        </div>
    )
}