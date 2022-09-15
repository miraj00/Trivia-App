//trivia api
export interface Player {
    playerName: string,
	score: number,
}

//db api
export interface scoreDetails {
    _id: string,
    playerName: string,
	score: number
}
