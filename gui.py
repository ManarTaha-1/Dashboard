import tkinter as tk
from tkinter import filedialog, messagebox
from PIL import Image, ImageTk, ImageFilter
import numpy as np
import cv2
try:
    import matplotlib.pyplot as plt
    HAS_MATPLOTLIB = True
except Exception:
    HAS_MATPLOTLIB = False

class ImageProcessorGUI:
    def __init__(self, root):
        self.root = root
        self.root.title("GUI Task")

        self.image = None
        self.img_path = None

        tk.Button(root, text="Read Image", command=self.read_image).pack(fill='x')
        tk.Button(root, text="Save Image", command=self.save_image).pack(fill='x')
        tk.Button(root, text="RGB to Gray", command=self.to_gray).pack(fill='x')
        tk.Button(root, text="Resize", command=self.resize_image).pack(fill='x')
        tk.Button(root, text="Rotate", command=self.rotate_image).pack(fill='x')
        tk.Button(root, text="Translate", command=self.translate_image).pack(fill='x')
        tk.Button(root, text="Gray Histogram", command=self.gray_hist).pack(fill='x')
        tk.Button(root, text="RGB Histogram", command=self.rgb_hist).pack(fill='x')
        tk.Button(root, text="Hist Equalization", command=self.hist_eq).pack(fill='x')
        tk.Button(root, text="Contrast Stretch", command=self.contrast_stretch).pack(fill='x')
        tk.Button(root, text="Thresholding", command=self.threshold).pack(fill='x')
        tk.Button(root, text="Negative", command=self.negative).pack(fill='x')
        tk.Button(root, text="Log Transform", command=self.log_transform).pack(fill='x')
        tk.Button(root, text="Power Law", command=self.power_law).pack(fill='x')
        tk.Button(root, text="Blur Filters", command=self.blur_filters).pack(fill='x')
        tk.Button(root, text="Add Noise", command=self.add_noise).pack(fill='x')
        tk.Button(root, text="Sharpen", command=self.sharpen).pack(fill='x')

        self.canvas = tk.Label(root)
        self.canvas.pack()

    def show(self, img):
        imgtk = ImageTk.PhotoImage(Image.fromarray(img))
        self.canvas.imgtk = imgtk
        self.canvas.config(image=imgtk)

    def read_image(self):
        self.img_path = filedialog.askopenfilename()
        if self.img_path:
            self.image = cv2.cvtColor(cv2.imread(self.img_path), cv2.COLOR_BGR2RGB)
            self.show(self.image)

    def save_image(self):
        if self.image is None: return
        path = filedialog.asksaveasfilename(defaultextension=".png")
        if path:
            cv2.imwrite(path, cv2.cvtColor(self.image, cv2.COLOR_RGB2BGR))

    def to_gray(self):
        if self.image is None: return
        self.image = cv2.cvtColor(self.image, cv2.COLOR_RGB2GRAY)
        self.show(self.image)

    def resize_image(self):
        if self.image is None: return
        self.image = cv2.resize(self.image, (300,300))
        self.show(self.image)

    def rotate_image(self):
        if self.image is None: return
        self.image = cv2.rotate(self.image, cv2.ROTATE_90_CLOCKWISE)
        self.show(self.image)

    def translate_image(self):
        if self.image is None: return
    def gray_hist(self):
        if self.image is None: return
        if not HAS_MATPLOTLIB:
            messagebox.showerror("Missing Dependency", "matplotlib is required to display histograms.\nPlease install it (pip install matplotlib).")
            return
        gray = cv2.cvtColor(self.image, cv2.COLOR_RGB2GRAY)
    def rgb_hist(self):
        if self.image is None: return
        if not HAS_MATPLOTLIB:
            messagebox.showerror("Missing Dependency", "matplotlib is required to display histograms.\nPlease install it (pip install matplotlib).")
            return
        color=('r','g','b')
        for i,col in enumerate(color):
            plt.plot(cv2.calcHist([self.image],[i],None,[256],[0,256]),color=col)
        plt.show()

    def rgb_hist(self):
        if self.image is None: return
        color=('r','g','b')
        for i,col in enumerate(color):
            plt.plot(cv2.calcHist([self.image],[i],None,[256],[0,256]),color=col)
        plt.show()

    def hist_eq(self):
        if self.image is None: return
        gray = cv2.cvtColor(self.image, cv2.COLOR_RGB2GRAY)
        self.image = cv2.equalizeHist(gray)
        self.show(self.image)

    def contrast_stretch(self):
        if self.image is None: return
        p2, p98 = np.percentile(self.image, (2,98))
        self.image = cv2.normalize(self.image, None, p2, p98, cv2.NORM_MINMAX)
        self.show(self.image)

    def threshold(self):
        if self.image is None: return
        gray = cv2.cvtColor(self.image, cv2.COLOR_RGB2GRAY)
        _, self.image = cv2.threshold(gray, 127, 255, cv2.THRESH_BINARY)
        self.show(self.image)

    def negative(self):
        if self.image is None: return
        self.image = 255 - self.image
        self.show(self.image)

    def log_transform(self):
        if self.image is None: return
        c = 255 / np.log(1 + np.max(self.image))
        self.image = (c * (np.log(self.image + 1))).astype(np.uint8)
        self.show(self.image)

    def power_law(self):
        if self.image is None: return
        gamma = 0.5
        self.image = np.array(255 * (self.image / 255) ** gamma, dtype=np.uint8)
        self.show(self.image)

    def blur_filters(self):
        if self.image is None: return
        self.image = cv2.GaussianBlur(self.image, (5,5), 0)
        self.show(self.image)

    def add_noise(self):
        if self.image is None: return
        noise = np.random.normal(0,20,self.image.shape).astype(np.uint8)
        self.image = cv2.add(self.image, noise)
        self.show(self.image)

    def sharpen(self):
        if self.image is None: return
        kernel = np.array([[0,-1,0],[-1,5,-1],[0,-1,0]])
        self.image = cv2.filter2D(self.image, -1, kernel)
        self.show(self.image)

root = tk.Tk()
app = ImageProcessorGUI(root)
root.mainloop()