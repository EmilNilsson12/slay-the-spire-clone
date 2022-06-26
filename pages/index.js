import Game from '../components/Game/Game';
import { BackgroundWrapper } from '../components/Game/Game.styled';

export default function Home() {
    return (
        <BackgroundWrapper>
            <Game />
        </BackgroundWrapper>
    );
}
