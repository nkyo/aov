import {useState, useEffect} from 'react';

const useDDragonStaticAssets = () => {
    const [championsList, setChampionsList] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3001/api/heroes')
            .then(res => res.json())
            .then(heroesArray => {
                if (!Array.isArray(heroesArray)) {
                    console.error("Fetched data is not an array:", heroesArray);
                    setChampionsList({});
                    return;
                }
                const championsObject = heroesArray.reduce((acc, hero) => {
                    acc[hero.hero_id] = {
                        version: hero.version,
                        id: hero.hero_id,
                        key: hero.hero_key,
                        name: hero.name,
                        title: hero.title,
                        blurb: hero.blurb,
                        image: {
                            full: hero.image_full,
                            sprite: hero.image_sprite,
                            group: hero.image_group,
                            x: hero.image_x,
                            y: hero.image_y,
                            w: hero.image_w,
                            h: hero.image_h,
                        },
                        tags: hero.tags ? hero.tags.split(',') : [],
                        partype: hero.partype,
                        stats: {
                            hp: hero.hp,
                            hpperlevel: hero.hpperlevel,
                            mp: hero.mp,
                            mpperlevel: hero.mpperlevel,
                            movespeed: hero.movespeed,
                            armor: hero.armor,
                            armorperlevel: hero.armorperlevel,
                            spellblock: hero.spellblock,
                            spellblockperlevel: hero.spellblockperlevel,
                            attackrange: hero.attackrange,
                            hpregen: hero.hpregen,
                            hpregenperlevel: hero.hpregenperlevel,
                            mpregen: hero.mpregen,
                            mpregenperlevel: hero.mpregenperlevel,
                            crit: hero.crit,
                            critperlevel: hero.critperlevel,
                            attackdamage: hero.attackdamage,
                            attackdamageperlevel: hero.attackdamageperlevel,
                            attackspeedperlevel: hero.attackspeedperlevel,
                            attackspeed: hero.attackspeed,
                        }
                    };
                    return acc;
                }, {});
                setChampionsList(championsObject);
            })
            .catch(error => console.error('Fetching heroes failed:', error));
    }, []);

    return {
        championsList,
        patchList: [],
        patch: null,
        setPatch: () => {},
    };
}

export default useDDragonStaticAssets;
