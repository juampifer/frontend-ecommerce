import Swal from 'sweetalert2';

// Alerta simple
export const showAlert = (title, text, icon = 'success') => {
  Swal.fire({
    title,
    text,
    icon,
    confirmButtonText: 'OK',
    timer: 3500,
    timerProgressBar: true,
    customClass: {
        confirmButton: "swal-confirm-btn",
      },
  });
};

// Alerta con confirmación
export const showConfirm = async (title, text, icon = 'warning') => {
  const result = await Swal.fire({
    title,
    text,
    icon,
    showCancelButton: true,
    confirmButtonText: 'Sí',
    cancelButtonText: 'No',
    customClass: {
        confirmButton: "swal-confirm-btn",
        cancelButton: "swal-cancel-btn",
    },
  });
  return result.isConfirmed;
};
