  // Modal logic
        const modal = document.getElementById('confirmationModal');
        const closeModalBtn = document.getElementById('closeModal');
        const donateBtns = document.querySelectorAll('.donate-btn');

        // Function to open the modal
        const openModal = () => {
            modal.classList.remove('hidden');
            setTimeout(() => {
                modal.classList.remove('opacity-0');
                modal.querySelector('.modal-content').classList.remove('scale-95');
            }, 10);
        };

        // Function to close the modal
        const closeModal = () => {
            modal.querySelector('.modal-content').classList.add('scale-95');
            modal.classList.add('opacity-0');
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 300); // Wait for transition to finish
        };

        // Event listeners
        donateBtns.forEach(btn => {
            btn.addEventListener('click', openModal);
        });

        closeModalBtn.addEventListener('click', closeModal);

        // Close modal when clicking on the overlay
        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                closeModal();
            }
        });