import clsx from 'clsx';
import styles from './Project.module.css';
const projects = [
    {
        id: 1,
        name: 'Binz Store',
        url: 'https://binz-store.vercel.app/',
        img: 'https://cdn-vincart.vinid.net/cep/spacespeaker/binz_banner_1440.jpg',
    },
    {
        id: 2,
        name: 'Foodie',
        url: 'https://foodie-kohl.vercel.app/',
        img: 'https://img.freepik.com/free-photo/figs-spices-with-cup-drink-blue_114579-29075.jpg?t=st=1656751884~exp=1656752484~hmac=795661707cdc6f427aeab5dec1ca59cdee94c76e41bb58b9e5dd6ebcb7f9571f&w=1380',
    },
    {
        id: 3,
        name: 'CollingWood',
        url: 'https://firstproject-github-io.vercel.app/#!/',
        img: 'https://www.eda.org.uk/wp-content/uploads/2018/09/a4c6f331248a34ff9acedbe8bd6ec589.jpg',
    },
    {
        id: 4,
        name: 'Art Store',
        url: 'https://github.com/mhd-1999/ArtStore',
        img: 'https://wallpaperaccess.com/full/7871566.png',
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
                    <div className={clsx(styles.groupItem, `item${project.id}`)} key={project.id}>
                        <div className={clsx(styles.overlay)}></div>
                        <div className={clsx(styles.itemText)}>
                            <a href={project.url}><p>{project.name}</p></a>
                        </div>
                        <div className={clsx(styles.itemImg)}>
                            <a href={project.url}>
                                <img src={project.img} alt="" />
                            </a>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
}

export default Project;
