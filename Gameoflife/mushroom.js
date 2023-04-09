class Mushroom  extends LivingCreature{ 
    constructor(x,y){
       super(x,y)
        this.energy = 10
        this.directions = [ ];
    }


    getNewCoordinates(){
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x    , this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y    ],
            [this.x + 1, this.y    ],
            [this.x - 1, this.y + 1],
            [this.x    , this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }


    chooseCell(char2) {
        this.getNewCoordinates()
       return super.chooseCell(char2)
    }

    mul() {
        let emptyCell = this.chooseCell(3)
        let newCell = random(emptyCell)

        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY][newX] = 4

            let mush = new Mushroom(newX, newY)

            mushroomArr.push(mush)


        }
    }

    eat() {
        let emptyCell = this.chooseCell(3)
        let newCell = random(emptyCell)

        if (newCell) {
            this.energy += 7
            let newX = newCell[0]
            let newY = newCell[1]


            for (let i in predatorArr) {
                if (newX == predatorArr[i].x && newY == predatorArr[i].y) {
                    predatorArr.splice(i, 1)
                }
            }

            matrix[newY][newX] = 4
            matrix[this.y][this.x] = 0


            this.x = newX
            this.y = newY

            if (this.energy > 30) {
                this.mul()
            }

            }else{
                this.move()
            }
        } 
         move(){
            let emptyCell = this.chooseCell(0)
            let newCell = random(emptyCell)
    
                if(newCell){
                    let newX = newCell[0]
                    let newY = newCell[1]
    
                    matrix[newY][newX] = 4
                    matrix[this.y][this.x] = 0
                    
                    this.x = newX
                    this.y = newY
    
                    this.energy--
    
                    if(this.energy < 0){
                        this.die ()
                    }
                }
         }
    
    
    
         die(){
            matrix[this.y][this.x] = 0
    
              for(let i in mushroomArr){
                       if(this.x == mushroomArr[i].x && this.y == mushroomArr[i].y) {
                                 mushroomArr.splice(i,1)
                       }
              }
        }
    
    
    }
    
    
    