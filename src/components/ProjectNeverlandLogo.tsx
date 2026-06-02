import React from 'react';

interface ProjectNeverlandLogoProps {
  className?: string; // Standard className to control height/style
  inverse?: boolean;  // If true, could invert colors (not used as we have solid theme)
  iconOnly?: boolean; // If true, only render the cloud symbol
}

export default function ProjectNeverlandLogo({
  className = "h-10 sm:h-12 w-auto",
  iconOnly = false
}: ProjectNeverlandLogoProps) {
  // Utilizing the uploaded PNG asset directly for the logo image
  return (
    <img
      src="/src/assets/images/pn logov2.png"
      alt="Project Neverland"
      className={`${className} object-contain`}
      id="project-neverland-logo-image"
    />
  );
}


