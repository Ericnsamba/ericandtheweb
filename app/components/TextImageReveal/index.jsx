import { motion } from "framer-motion";
import Image from "next/image";

<div>
  <p className="text-Lace_Veil uppercase">{title1}</p>
  <motion.div
    variants={anim}
    animate={isActive ? "open" : "closed"}
    className={styles.imgContainer}
  >
    <Image
      className="bg-black w-full h-full object-cover"
      src={src}
      width={1000}
      height={1000}
      alt={"image"}
    />
  </motion.div>
  <p className="text-Lace_Veil uppercase">{title2}</p> 
</div>