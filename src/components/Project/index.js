import './Project.css';
const projects = [
    {
        id: 1,
        name: 'Binz Store',
        url: '',
        img: 'https://cdn-vincart.vinid.net/cep/spacespeaker/binz_banner_1440.jpg',
    },
    {
        id: 2,
        name: 'CollingWood',
        url: '',
        img: 'https://media-exp1.licdn.com/dms/image/C4E22AQFHP_bB1U29LA/feedshare-shrink_2048_1536/0/1649862359092?e=2147483647&v=beta&t=1IxONXY5npWSxtx57ScPEZjF1R_65oUZFmqGCZ7vcss',
    },
    {
        id: 3,
        name: 'Art Store',
        url: '',
        img: 'https://wallpaperaccess.com/full/7871566.png',
    },
    {
        id: 4,
        name: 'Chat real time',
        url: '',
        img: 'https://cdn.nguyenkimmall.com/images/detailed/793/dang-nha-zalo-web-thumb.jpg',
    },
];
function Project() {
    return (
        <div className="project">
            <div className="title">
                <p>project</p>
            </div>
            <div className="group">
                {projects.map((project) => (
                    <div className="group-item" key={project.id}>
                        <div className="item-text">
                            <p>{project.name}</p>
                        </div>
                        <div className="item-img">
                            <a href={project.url}>
                                <img src={project.img} alt="" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Project;
