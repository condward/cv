import { Typography } from "./UI/Typography";
import { SectionCard } from "./UI/SectionCard";

export const Education = () => (
  <SectionCard title="Education">
    <Typography type="subtitle">
      Master's degree in Electronics and Telecommunication Engineering
    </Typography>
    <Typography type="heading">
      University of Aveiro (09/2007 – 07/2012)
    </Typography>
    <Typography label="Location"> Aveiro, Portugal</Typography>
    <Typography label="Thesis">
      “Detection techniques for the uplink of LTE“
    </Typography>
    <Typography>
      This thesis work is based on the physical layer of LTE, namely the uplink
      communication with its multiple access technique SC-FDMA. It was
      implemented in a simulation platform an iterative frequency-domain
      receiver where multiple MIMO configurations were used in a multiple access
      environment. The obtained results allow comparison of the efficacy in
      removing interference and also the attenuation of the nearfar effect
      between linear frequency domain receivers such as ZF and MMSE and
      iterative frequency domain receivers.
    </Typography>
    <Typography label="Main subjects" />
    <Typography bullet>Electronics</Typography>
    <Typography bullet>Object oriented programming</Typography>
    <Typography bullet>Computer Architecture</Typography>
    <Typography bullet>Operating Systems</Typography>
    <Typography bullet>Control theory</Typography>
    <Typography bullet>Radio systems</Typography>
    <Typography bullet>Planning of mobile networks</Typography>
    <Typography bullet>Wireless networks</Typography>
    <Typography bullet>Antennas and wave-guides</Typography>
  </SectionCard>
);
