const animationStyles = `
  @keyframes slideInDivider {
    from {
      opacity: 0;
      transform: scaleX(0);
    }
    to {
      opacity: 1;
      transform: scaleX(1);
    }
  }

  @keyframes slideUpButton {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideInImage {
    from {
      opacity: 0;
      transform: translateX(100px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .animate-divider {
    animation: slideInDivider 0.6s ease-out 0.3s both;
  }

  .animate-button-1 {
    animation: slideUpButton 0.5s ease-out 0.4s both;
  }

  .animate-button-2 {
    animation: slideUpButton 0.5s ease-out 0.5s both;
  }

  .animate-image {
    animation: slideInImage 0.8s ease-out 0.1s both;
  }
`;
export { animationStyles };
