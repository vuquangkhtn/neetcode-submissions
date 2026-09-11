const LENGTH = 9;
class Solution {
    
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const isValidCol = (board) => {
            for (let iCol=0; iCol<LENGTH; iCol++) {
                const freq = new Set();
                for (let iRow=0; iRow<LENGTH; iRow++) {
                    const val = board[iRow][iCol];
                    if (val === '.') continue;
                    if (freq.has(val)) {
                        return false;
                    }
                    if (val <= 0 || val > 9) {
                        return false;
                    }
                    freq.add(val);
                }
            }
            return true;
        }

        const isValidRow = (board) => {
            for (let iRow=0; iRow<LENGTH; iRow++) { 
                const freq = new Set();
                for (let iCol=0; iCol<LENGTH; iCol++) {
                    const val = board[iRow][iCol];
                    if (val === '.') continue;
                    if (freq.has(val)) {
                        return false;
                    }
                    if (val <= 0 || val > 9) {
                        return false;
                    }
                    freq.add(val);
                }
            }
            return true;
        }

        const isValidSquare = (board) => {
            for (let iRow=0; iRow<LENGTH; iRow+=3) {
                for (let iCol=0; iCol<LENGTH; iCol+=3) {
                    const freq = new Set();
                    for(let i=iRow; i<iRow+3; i++) {
                        for (let j=iCol; j<iCol+3; j++) {
                            const val = board[i][j];
                            if (val === '.') continue;
                            if (freq.has(val)) {
                                return false;
                            }
                            if (val <= 0 || val > 9) {
                                return false;
                            }
                            freq.add(val);
                        }
                    }
                }
            }
            return true;
        }

        return isValidSquare(board) 
            && isValidCol(board)
            && isValidRow(board);
    }
}
