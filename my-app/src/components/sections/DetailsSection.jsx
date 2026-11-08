import { motion } from "framer-motion";
import AnimatedSection from "../AnimatedSection";
import SectionTitle from "../ui/SectionTitle";
import { SECTIONS, DETAIL_CARDS } from "../../constants/weddingContent";
import haldiQR from "../../assets/Haldi-1024.png";
import marriageQR from "../../assets/Marriage-1024.png";
import receptionQR from "../../assets/Reception-1024.png";

const QR_IMAGES = { haldi: haldiQR, marriage: marriageQR, reception: receptionQR };

export default function DetailsSection() {
    return (
        <AnimatedSection>
            <section className="section details-section">
                <SectionTitle sub={SECTIONS.details.sub}>
                    {SECTIONS.details.title}
                </SectionTitle>
                <div className="details-cards">
                    {DETAIL_CARDS.map((card, i) => (
                        <motion.div
                            key={card.title}
                            className="detail-card"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            whileHover={{
                                y: -8,
                                boxShadow: "0 20px 50px rgba(155,79,110,0.2)",
                            }}
                        >
                            <motion.div
                                className="detail-card-icon"
                                animate={{ rotate: [0, 5, -5, 0] }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    delay: i,
                                }}
                            >
                                {card.icon}
                            </motion.div>
                            <h3>{card.title}</h3>
                            {card.lines.map((l) => (
                                <p key={l}>{l}</p>
                            ))}
                            <a
                                href={card.mapUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="detail-card-qr-block"
                                aria-label={`Open directions to ${card.title} in Google Maps`}
                            >
                                <img
                                    src={QR_IMAGES[card.qrKey]}
                                    alt={`Scan for directions to ${card.title}`}
                                    className="detail-card-qr"
                                />
                                <span className="detail-card-qr-label">
                                    Scan or tap for directions
                                </span>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </section>
        </AnimatedSection>
    );
}
