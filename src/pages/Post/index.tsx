import { Header } from '../../components/Header/Header'

import img from '../../assets/img.svg'

import styles from './Post.module.scss'

function Post() {
  return (
    <>
      <Header />

      <div className={styles.container}>
        <div>
          <img src={img} alt="image" />

          <div className={styles.info}>
            <span>Jan 6. 2018</span>
            <p className="text">Page Post</p>
            <h1 className="title">Qui occaecati vero et quibusdam non </h1>
          </div>
        </div>

        <div className={styles.article}>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eleifend ligula in nulla vulputate pharetra.
            Proin condimentum, libero quis feugiat pharetra, ante arcu faucibus felis, vel elementum magna felis in
            libero. Aliquam id ultricies purus. Etiam at ullamcorper enim. Cras vel elit ac lorem condimentum dignissim.
            Ut rhoncus neque finibus erat congue, id tempus lacus hendrerit. Curabitur non faucibus diam. Sed id ante id
            dolor euismod varius eu vel velit. <br />
            <br /> Maecenas id ligula quis enim blandit gravida a et lorem. Vivamus eu turpis eu leo malesuada dictum
            non ac tortor. Pellentesque volutpat mollis leo tincidunt sollicitudin. Suspendisse porta imperdiet sapien
            nec euismod. Quisque ac dictum sem. Cras in porttitor lacus, vitae convallis elit. Maecenas in fermentum
            erat, a rutrum nulla. <br />
            <br /> Mauris quis dolor sit amet metus mollis tempor eu quis turpis. Vestibulum vel eleifend magna, eget
            tempor nulla. Donec bibendum mauris aliquam elit vulputate, id vestibulum lorem sodales. Nullam eget erat
            mauris. Etiam sit amet sollicitudin magna. Ut tortor nisi, mollis viverra tempus consequat, interdum non mi.
            Quisque bibendum, lacus sit amet rhoncus malesuada.
          </p>
        </div>
      </div>
    </>
  )
}

export default Post
