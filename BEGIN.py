import tkinter as tk
from idlelib.browser import file_open
from tkinter import messagebox, IntVar
from PIL import Image,ImageTk

Win=tk.Tk()
Win.geometry("500x454")


def delete_nom():
    return nom.delete(0,tk.END)

def delete_prenom():
    return prenom.delete(0,tk.END)

def delete_age():
    return Age_entry.delete(0,tk.END)



Win.resizable(False,False)


Win.config(bg="black")

def thick_normal_nom():
    nom.config(highlightbackground="white")
def thick_normal_prenom():
    prenom.config(highlightbackground="white")
def thick_normal_age():
    Age_entry.config(highlightbackground="white")

def thick_normal_entries():
    thick_normal_nom()
    thick_normal_prenom()
    thick_normal_age()
def check():

    Name = nom.get()
    Surname = prenom.get()
    Age = Age_entry.get()

    if  Name=="" and Surname=="" and Age=="":
        nom.config(highlightbackground="red")
        prenom.config(highlightbackground="red")
        Age_entry.config(highlightbackground="red")
        Win.after(2000, thick_normal_entries)
        messagebox.showerror(title="Error", message="ENTER ALL ENTRY BOXES!!!")
    elif not Name:
        nom.config(highlightbackground="red")
        Win.after(2000,thick_normal_nom)
        messagebox.showerror(title="Error", message="ENTER ALL ENTRY BOXES!!!")
    elif not Surname:
        prenom.config(highlightbackground="red")
        Win.after(2000, thick_normal_prenom)
        messagebox.showerror(title="Error", message="ENTER ALL ENTRY BOXES!!!")

    elif not (Name[0].isalpha() and all(char.isalpha()  or char==" " for char in Name)):
        nom.config(highlightbackground="red")
        delete_nom()
        Win.after(2000,thick_normal_nom)
        messagebox.showerror(title="Error", message="Only strings allowed for the name!!")

    elif not (Surname[0].isalpha() and all(cha.isalpha()  for cha in Surname)):
        prenom.config(highlightbackground="red")
        delete_prenom()
        Win.after(2000,thick_normal_prenom)
        messagebox.showerror(title="Error",message="Only strings allowed for the surname!!")

    elif not Age.isdigit() :
        Age_entry.config(highlightbackground="red")
        delete_age()
        Win.after(2000,thick_normal_age)
        messagebox.showerror(title="Error",message="Insert a digit for the number")

    else:
        Win.withdraw()
        open_intro()

def open_intro():
    global open_intro

    open_intro=tk.Toplevel(Win)
    open_intro.geometry("500x420")
    open_intro.config(bg="#0F005E")

    C=tk.Canvas(open_intro,width=190,height=500,bg="#0F005E")
    C.pack(side="left",fill="x")
    C.create_text(90,180,text="Study",font=("Palatino Linotype",35),fill="#FFD400")

    C1=tk.Canvas(open_intro,width=190,height=500,bg="#FFD400")
    C1.pack(side="right",fill="x")
    C1.create_text(100,180,text="Combos",font=("Palatino Linotype",35),fill="#0F005E")

    C2=tk.Canvas(open_intro,width=230,height=140,bg="#FFD400")
    C2.pack(pady=117)
    C2.create_text(60,60,text="Combine \n Studies",font=("Palatino Linotype",20),fill="#0F005E")

    open_intro.after(4000,newin)

def newin():
    global open_intro
    global newin
    open_intro.destroy()
    Name = nom.get()
    Surname = prenom.get()
    Age = Age_entry.get()

    newin=tk.Toplevel(Win)
    newin.title("Hello")
    newin.geometry("700x700")

    Icon = Image.open("STD.png")
    Icon = Icon.resize((700, 700))
    photo = ImageTk.PhotoImage(Icon)
    label = tk.Label(newin, image=photo)
    label.place(x=0, y=0, relwidth=1, relheight=1)
    newin.bg=photo
    can=tk.Canvas(newin,width=350,height=190,highlightthickness=0,bg=newin["bg"],borderwidth=0)
    can.pack(pady=35)

    text1 = tk.Label(newin, text="you are to choose one major study", font=("Ink Free", 20), fg="#00CFFF",bg=newin["bg"],borderwidth=0)
    text1.pack()

    C=tk.Label(newin,width=1000,height=400,bg="#072729")
    C.pack(pady=8)

    fl1=tk.Button(C,text="IT",font=("Arial",30),bg="#655801",activebackground="#003106",command=info_field_IT)

    fl2=tk.Button(C,text="Mechatonics",font=("Arial",30),bg="#655801",activebackground="#003106",command=info_field_mctncs)

    fl1.pack(pady=25)
    fl2.pack(pady=28)

    oval=can.create_oval(10, 7, 345, 190, fill="lightblue", outline="",width=4)

    text=can.create_text(173,95,text=f"hello {Age}-year old \n {Name} {Surname}",font=("Ink Free",20),fill="black")

tk.Label(text="Name:",font=("Ink Free",20),bg="black",fg="purple").pack()
nom=tk.Entry(font=("Arial",15),highlightthickness=2,highlightcolor="purple")
nom.pack(pady=5)
tk.Button(Win,text="Delete Name",bg="purple",fg="white",font=("Ink Free",13),activebackground="black",activeforeground="purple",command=delete_nom).pack(pady=5)

tk.Label(text="Surname:",font=("Ink Free",20),bg="black",fg="purple").pack()
prenom=tk.Entry(font=("Arial",15),highlightthickness=2,highlightcolor="purple")
prenom.pack(pady=5)
tk.Button(Win,text="Delete Surname",bg="purple",fg="white",font=("Ink Free",13),activebackground="black",activeforeground="purple",command=delete_prenom).pack(pady=5)


tk.Label(text="Age:",font=("Ink Free",20),bg="black",fg="purple").pack()
Age_entry=tk.Entry(font=("Arial",15),highlightthickness=2,highlightcolor="purple")
Age_entry.pack()
tk.Button(Win,text="Delete Age",bg="purple",fg="white",font=("Ink Free",13),activebackground="black",activeforeground="purple",command=delete_age).pack(pady=10)



def back1(window):
    global newin
    window.destroy()
    newin.deiconify()

def info_field_IT():
    global newin

    newin.withdraw()
    newin2=tk.Toplevel(newin)
    newin2.title("IT ramifications")
    newin2.geometry("500x500")


    Icon = Image.open("IA.png")
    Icon = Icon.resize((500, 500))
    photo = ImageTk.PhotoImage(Icon)
    label = tk.Label(newin2, image=photo)
    label.place(x=0, y=0, relwidth=1, relheight=1)
    newin2.bg=photo

    back_button=tk.Button(newin2,text="BACK",bg="white",fg="#87E9FF",relief="raised",font=("Ink Free",15),activebackground="#87E9FF",activeforeground="white",command=lambda:back1(newin2))
    back_button.grid(row=0,column=0,sticky="ne")

    big_text=tk.Label(newin2,text=f"Information \n Technology",relief="raised",fg="#26FFF3",bg=newin2["bg"],font=("Arial",23))
    big_text.grid(row=1,column=1,padx=70,pady=70)

    def button_on():

        if  (x.get() and y.get()) or (x.get() and z.get()) or (y.get() and z.get()):
            Done_button.config(state="normal",bg="#3900FF",fg="white",activebackground="#18005E",activeforeground="white")
        else:
            Done_button.config(state="disabled",bg="white")
    def back2(window):
        x.set(0)
        y.set(0)
        z.set(0)
        window.destroy()
        newin2.deiconify()

    def combwin_IT():
        global newin

        newin2.withdraw()
        combwin=tk.Toplevel(newin2)
        combwin.geometry("605x600")

        Canv=tk.Canvas(combwin,width=80,height=600,bg="#7FCFD9")
        Canv.pack(side="left",fill="y")

        frame=tk.Frame(Canv)
        Canv.create_window((40,190),window=frame,anchor="center")
        Canv.pack()

        back=tk.Button(frame,text="BACK",font=("Segoe UI Black",14),background="white",activeforeground="white",activebackground="#25D9D6",fg="#25D9D6",command=lambda :back2(combwin))
        back.pack()
        frame1=tk.Frame(combwin)
        frame1.pack(fill="both",expand=True)

        horizontal_scrollbar=tk.Scrollbar(frame1,orient="horizontal")
        horizontal_scrollbar.pack(side="bottom",fill="x")

        vertical_scrollbar=tk.Scrollbar(frame1,orient="vertical")
        vertical_scrollbar.pack(side="right",fill="y")

        text=tk.Text(frame1,font=("Monotype Corsiva",15),fg="#00D9D7",bg="black",wrap="none",width=55,height=20,xscrollcommand=horizontal_scrollbar.set,yscrollcommand=vertical_scrollbar.set)
        text.pack(side="left",fill="both",expand=True)

        horizontal_scrollbar.config(command=text.xview)
        vertical_scrollbar.config(command=text.yview)

        if x.get() and z.get():
            with open("Dev-AI.txt","r") as File:

                content=File.read()
                text.insert(1.0,"\n\n\n")
                header="       "*1+"Software Engineering+Artificial Intelligence   "
                text.insert(2.0,header)
                start_index="2.%d" %(len("      "*1)-2)
                end_index="2.%d" %(len(header)+5)
                text.insert(3.0,f"\n\n\n{content}")
                text.tag_add("highlight",start_index,end_index)
                text.tag_add("highlight2","3.0")
                text.tag_config("highlight2",font=("Monotype Corsiva",10,"bold"),relief="raised")
                text.tag_config("highlight",foreground="#00D9D7",font=("Monotype Corsiva",14,"bold"),relief="raised",underline=True)

        if x.get() and y.get():
          with open("Cybersecurity-Dev", "r") as File:
              content = File.read()
              text.insert(1.0, "\n\n\n")
              header = "     " * 4 + "Software Engineering+Cybersecurity  "
              text.insert(2.0, header)
              start_index = "2.%d" % (len("     " * 4) - 2)
              end_index = "2.%d" % (len(header) + 5)
              text.insert(3.0, f"\n\n\n{content}")
              text.tag_add("highlight", start_index, end_index)
              text.tag_add("highlight2", "3.0")
              text.tag_config("highlight2", font=("Monotype Corsiva", 10, "bold"), relief="raised")
              text.tag_config("highlight", foreground="#00D9D7", font=("Monotype Corsiva", 14, "bold"), relief="raised",
                              underline=True)
        if y.get() and z.get():
            with open("AI-Cybersecurity","r") as File:
                    content = File.read()
                    text.insert(1.0, "\n\n\n")
                    header = "     " * 4 + "Artificial Intelligence+Cybersecurity  "
                    text.insert(2.0, header)
                    start_index = "2.%d" % (len("     " * 4) - 2)
                    end_index = "2.%d" % (len(header) + 5)
                    text.insert(3.0, f"\n\n\n{content}")
                    text.tag_add("highlight", start_index, end_index)
                    text.tag_add("highlight2", "3.0")
                    text.tag_config("highlight2", font=("Monotype Corsiva", 10, "bold"), relief="raised")
                    text.tag_config("highlight", foreground="#00D9D7", font=("Monotype Corsiva", 14, "bold"),
                                    relief="raised",
                                    underline=True)
        if x.get() and y.get() and z.get():
            with open("SE+AI+CybS","r") as File:
                content = File.read()
                text.insert(1.0, "\n\n\n")
                header = "    " * 1 + "Software Engineering+Artificial Intelligence+Cybersecurity  "
                text.insert(2.0, header)
                start_index = "2.%d" % (len("     " * 1) - 2)
                end_index = "2.%d" % (len(header) + 5)
                text.insert(3.0, f"\n\n\n{content}")
                text.tag_add("highlight", start_index, end_index)
                text.tag_add("highlight2", "3.0")
                text.tag_config("highlight2", font=("Monotype Corsiva", 10, "bold"), relief="raised")
                text.tag_config("highlight", foreground="#00D9D7", font=("Monotype Corsiva", 14, "bold"),
                                relief="raised",
                                underline=True)

    x=IntVar()
    y=IntVar()
    z=IntVar()

    tk.Checkbutton(newin2,text="Software Engineering",font=("Arial",20),bg="#D5FFFC",fg="#6362FF",activeforeground="#6362FF",variable=x,command=button_on).grid(row=2,column=1)

    tk.Checkbutton(newin2,text="Cybersecurity",font=("Arial",20),bg="#D5FFFC",fg="#6362FF",activeforeground="#6362FF",variable=y,command=button_on).grid(row=3,column=1,pady=5)

    tk.Checkbutton(newin2,text="AI",font=("Arial",20),bg="#D5FFFC",fg="#6362FF",activeforeground="#6362FF",variable=z,command=button_on).grid(row=4,column=1,pady=5)

    Done_button=tk.Button(newin2,text="DONE",state="disabled",bg="white",disabledforeground="#87E9FF",relief="raised",font=("Ink Free",15),command=combwin_IT)

    Done_button.grid(row=8,column=2,padx=30,pady=30)


def back_initial3(window):
    global newin
    window.destroy()
    newin.deiconify()

def info_field_mctncs():
    global newin

    newin.withdraw()
    newin3=tk.Toplevel(newin)
    newin3.title("mctncs ramifications")
    newin3.geometry("500x500")
    newin3.config(bg="#FFDA2F")


    Icon = Image.open("MECH.png")
    Icon = Icon.resize((500, 500))
    photo = ImageTk.PhotoImage(Icon)
    label = tk.Label(newin3, image=photo)
    label.place(x=0, y=0, relwidth=1, relheight=1)
    newin3.bg=photo


    back_button=tk.Button(newin3,text="BACK",bg="white",fg="#FFF770",relief="raised",font=("Ink Free",15),activebackground="#FFF07B",activeforeground="white",command=lambda:back_initial3(newin3))
    back_button.grid(row=0,column=0,sticky="ne")

    big_text=tk.Label(newin3,text=f"Mechatonics",relief="raised",fg="#FDFFA3",bg=newin3["bg"],font=("Arial",23))
    big_text.grid(row=1,column=1,padx=70,pady=70)

    def button_on():

        if  (x1.get() and y1.get()) or (x1.get() and z1.get()) or (y1.get() and z1.get()):
            done_button2.config(state="normal",bg="#FFDA00",fg="white",activebackground="#FFB900",activeforeground="white")
        else:
            done_button2.config(state="disabled",bg="white")
    def back3(window):
        x1.set(0)
        y1.set(0)
        z1.set(0)
        window.destroy()
        newin3.deiconify()

    def combwin_mctncs():
        global newin

        newin3.withdraw()
        combwin2=tk.Toplevel(newin3)
        combwin2.geometry("605x600")

        Canv=tk.Canvas(combwin2,width=80,height=600,bg="#FFD300")
        Canv.pack(side="left",fill="y")

        frame=tk.Frame(Canv)
        Canv.create_window((40,190),window=frame,anchor="center")
        Canv.pack()

        back=tk.Button(frame,text="BACK",font=("Segoe UI Black",14),background="white",activeforeground="white",activebackground="#FFD300",fg="#FFD300",command=lambda :back3(combwin2))
        back.pack()
        frame1=tk.Frame(combwin2)
        frame1.pack(fill="both",expand=True)

        horizontal_scrollbar=tk.Scrollbar(frame1,orient="horizontal")
        horizontal_scrollbar.pack(side="bottom",fill="x")

        vertical_scrollbar=tk.Scrollbar(frame1,orient="vertical")
        vertical_scrollbar.pack(side="right",fill="y")

        text=tk.Text(frame1,font=("Monotype Corsiva",15),fg="#FFF902",bg="black",wrap="none",width=55,height=20,xscrollcommand=horizontal_scrollbar.set,yscrollcommand=vertical_scrollbar.set)
        text.pack(side="left",fill="both",expand=True)

        horizontal_scrollbar.config(command=text.xview)
        vertical_scrollbar.config(command=text.yview)

        if x1.get() and z1.get():
            text.config(width=60)
            with open("Mech+Electro.txt", "r",encoding="utf-8") as File:

                content = File.read()
                text.insert(1.0,"\n\n\n")
                header="       "*1+"Mechanical Engineering+Electronic Engineering   "
                text.insert(2.0,header)
                start_index="2.%d" %(len("      "*1)-2)
                end_index="2.%d" %(len(header)+5)
                text.insert(3.0,f"\n\n\n{content}")
                text.tag_add("highlight",start_index,end_index)
                text.tag_add("highlight2","3.0")
                text.tag_config("highlight2",font=("Monotype Corsiva",10,"bold"),relief="raised")
                text.tag_config("highlight",foreground="#FFF902",font=("Monotype Corsiva",14,"bold"),relief="raised",underline=True)

        if x1.get() and y1.get():
          with open("Mechanical Engineering and Electrical Engineering", "r") as File:
              content = File.read()
              text.insert(1.0, "\n\n\n")
              header = "     " * 4 + "Mechanical Engineering+Electric Engineering  "
              text.insert(2.0, header)
              start_index = "2.%d" % (len("     " * 4) - 2)
              end_index = "2.%d" % (len(header) + 5)
              text.insert(3.0, f"\n\n\n{content}")
              text.tag_add("highlight", start_index, end_index)
              text.tag_add("highlight2", "3.0")
              text.tag_config("highlight2", font=("Monotype Corsiva", 10, "bold"), relief="raised")
              text.tag_config("highlight", foreground="#FFF902", font=("Monotype Corsiva", 14, "bold"), relief="raised",
                              underline=True)
        if y1.get() and z1.get():
            with open("Electric Engineering and Electronic Engineering","r") as File:
                    content = File.read()
                    text.insert(1.0, "\n\n\n")
                    header = "     " * 4 + "Electric Engineering+Electronic Engineering  "
                    text.insert(2.0, header)
                    start_index = "2.%d" % (len("     " * 4) - 2)
                    end_index = "2.%d" % (len(header) + 5)
                    text.insert(3.0, f"\n\n\n{content}")
                    text.tag_add("highlight", start_index, end_index)
                    text.tag_add("highlight2", "3.0")
                    text.tag_config("highlight2", font=("Monotype Corsiva", 10, "bold"), relief="raised")
                    text.tag_config("highlight", foreground="#FFF902", font=("Monotype Corsiva", 14, "bold"),
                                    relief="raised",
                                    underline=True)
            if x1.get() and y1.get() and z1.get():
                text.config(width=55)
                with open("MECH+ELECTRO+ELECTRIC", "r",encoding="utf-8") as File:
                    content = File.read()
                    text.insert(1.0, "\n\n\n")
                    header = "   " * 1 + "Mechanical Engineering+Electric Engineering+Electronic Engineering  "
                    text.insert(2.0, header)
                    start_index = "2.%d" % (len("   " * 1) - 2)
                    end_index = "2.%d" % (len(header) + 5)
                    text.insert(3.0, f"\n\n\n{content}")
                    text.tag_add("highlight", start_index, end_index)
                    text.tag_add("highlight2", "3.0")
                    text.tag_config("highlight2", font=("Monotype Corsiva", 10, "bold"), relief="raised")
                    text.tag_config("highlight", foreground="#FFF902", font=("Monotype Corsiva", 14, "bold"),
                                    relief="raised",
                                    underline=True)
        text.config(state=tk.DISABLED)

    x1=IntVar()
    y1=IntVar()
    z1=IntVar()

    tk.Checkbutton(newin3,text="Mechanical Engineering",font=("Arial",20),bg="#F6FFFC",fg="#FFE51A",activeforeground="#FFE51A",variable=x1,command=button_on).grid(row=2,column=1)

    tk.Checkbutton(newin3,text="Electrical Engineering",font=("Arial",20),bg="#F6FFFC",fg="#FFE51A",activeforeground="#FFE51A",variable=y1,command=button_on).grid(row=3,column=1,pady=5)

    tk.Checkbutton(newin3,text="Electronic Engineering",font=("Arial",20),bg="#F6FFFC",fg="#FFE51A",activeforeground="#FFE51A",variable=z1,command=button_on).grid(row=4,column=1,pady=5)

    done_button2=tk.Button(newin3,text="DONE",state="disabled",bg="white",disabledforeground="#FFD533",relief="raised",font=("Ink Free",15),command=combwin_mctncs)

    done_button2.grid(row=8,column=2,padx=30,pady=50)

tk.Button(Win,text="Submit",bg="purple",fg="white",font=("Ink Free",13),activebackground="black",activeforeground="purple",command=check).pack(pady=17)

Win.mainloop()