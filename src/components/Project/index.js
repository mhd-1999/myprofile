import clsx from 'clsx';
import styles from './Project.module.css';
import binz from './img/binzStore.png';
import foodie from './img/foodie.png';
import coolingwood from './img/coolingwood.png';
import artstore from './img/artStore.png';
import Tilt from 'react-vanilla-tilt';
const projects = [
    {
        id: 1,
        name: 'Binz Store',
        url: 'https://binz-store.vercel.app/',
        img: binz
    },
    {
        id: 2,
        name: 'Foodie',
        url: 'https://foodie-kohl.vercel.app/',
        img: foodie
    },
    {
        id: 3,
        name: 'Colling',
        url: 'https://collingwood.vercel.app/#!/',
        img: coolingwood
    },
    {
        id: 4,
        name: 'Art Store',
        url: 'https://github.com/mhd-1999/ArtStore',
        img: artstore
    },
];
function Project() {
    return (
        <section className={clsx(styles.project)} id="Portfolio">
            <div className={clsx(styles.title)}>
                <p>project</p>
            </div>
            <div className={clsx(styles.group)}>
                {projects.map((project) => (
                    <div className={clsx(styles.groupItem)} id={`item${project.id}`} key={project.id}>
                        <div className={clsx(styles.overlay)}></div>
                        <div className={clsx(styles.itemText)}>
                            <a href={project.url}><p>{project.name}</p></a>
                        </div>
                        <Tilt id="card" style={{ padding: "unset" }}>
                            <div className={clsx(styles.itemImg)}>
                                <a href={project.url}>
                                    <img src={project.img} alt="" />
                                </a>
                            </div>
                        </Tilt>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Project;
