const copyContent = async () => {
    try {
      await navigator.clipboard.writeText("Lparres2000@gmail.com");
      console.log('Content copied to clipboard succesfully');
    } catch (err) {
      console.error('Error while trying to copy content to clipboard: ', err);
    }
  }