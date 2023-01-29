





    class PlanetDetail {
        constructor(name, distance, type, position, positionsolar,clas,imagem,theme, rotation) {
            this.name = name;
            this.distance = distance;
            this.type = type;
            this.position = position;
            this.positionsolar = positionsolar;
            this.clas=clas;
            this.imagem=imagem;
            this.theme=theme;
            this.rotation=rotation;

        }
    }

    let Terra = new PlanetDetail("Earth", 0 , "Terrestrial", 1,3, "d-block","./Earthi.glb","Who are we?", "365")
    let Urano = new PlanetDetail( "Uranus", 2586, "Gas giant", 2, 7, "d-block","./Uranus.glb","We may be alone in this darkness.","30 680")
    let Mercurio = new PlanetDetail( "Mercury", 83, "Terrestrial", 3, 1, "d-block","./Mercury.glb","Do we have purpose?","85")
    let Jupiter = new PlanetDetail( "Jupiter", 592, "Gas giant", 4, 7, "d-block","./Jupiter.glb","Each one in its own different way.","10 476")
    let Venus = new PlanetDetail( "Venus", 40, "Terrestrial", 5, 7, "d-block","./Venus.glb","So much to be proud of.","224")
    let Marte = new PlanetDetail( "Mars", 55, "Terrestrial", 6, 7, "d-block","./Mars.glb","Is there hope in the end?","687")
    let Saturno = new PlanetDetail( "Saturn", 1204, "Gas giant", 7, 7, "d-block","./Saturn.glb","However, do we have time?","10 759")
    let Neptuno = new PlanetDetail( "Neptune", 4311, "Gas giant", 8, 7, "d-block","./Neptune.glb","Where do we end?","60 265")

   const info=[Terra, Urano, Mercurio, Jupiter, Venus, Marte, Saturno, Neptuno]




export default info;