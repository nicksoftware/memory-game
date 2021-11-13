import React,{useEffect, useState} from "react";
import GameSession from "../components/GameSession";
import utils from "../utils";

const GameGenerator = () => {
	const [gridSize,setGridSize] =useState( 5);

	const [challengeSize ,setChallengeSize] = useState(3);
	const [gameId, setGameId] = useState(1);

	const cellIds = utils.createArray(gridSize * gridSize);
	const cellWidth = 100 / gridSize;
	const challengeCellIds = utils.sampleArray(cellIds, challengeSize);

	const handleNextChallenge = ()=>{
				setChallengeSize(challengeSize+ 1);
			setGridSize(gridSize+ 1);
			setGameId(gameId => gameId + 1);
	}
	const handleResetGame = ()=>{
		setChallengeSize(3);
		setGridSize(5);
		setGameId(gameId => gameId + 1);
	}

	return (
		<GameSession
			key={gameId}
			cellIds={cellIds}
			challengeCellIds={challengeCellIds}
			cellWidth={cellWidth}
			challengeSize={challengeSize}
			challengeSeconds={3}
			nextChallenge={handleNextChallenge}
			playSeconds={10}
			maxWrongAttempts={3}
			autoStart={gameId > 1}
			resetGame={handleResetGame}
		/>
	);
};

export default GameGenerator;