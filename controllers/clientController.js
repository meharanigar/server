import Client from "../models/Client.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Register Client
export const registerClient = async (req, res) => {
  try {
    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    const client = await Client.create(req.body);

    res.status(201).json({
      success: true,
      message: "Client registered successfully",
      client,
    });

  } catch (error) {
    console.error( error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Login Client
export const loginClient = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find client by email
    const client = await Client.findOne({ email });

    if (!client) {
      return res.status(404).json({
        success: false,
        message: "Email not registered",
      });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, client.password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Incorrect password",
      });
    }

    // Generate JWT Token
    const token = jwt.sign(
      {
        id: client._id,
        role: client.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    res.status(200).json({
      success: true,
      message: "Login Successful",
      token,
      client,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Clients
export const getClients = async (req, res) => {
  try {
    const clients = await Client.find();

    res.status(200).json({
      success: true,
      clients,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Single Client
export const getClientById = async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);

    if (!client) {
      return res.status(404).json({
        success: false,
        message: "Client not found",
      });
    }

    res.status(200).json({
      success: true,
      client,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Client
export const updateClient = async (req, res) => {
  try {
    const updatedData = {
      fullName: req.body.fullName,
      email: req.body.email,
      phone: req.body.phone,
      village: req.body.village,
      ward: req.body.ward,
    };

    // Update profile image if uploaded
    if (req.file) {
      updatedData.profileImage = req.file.filename;
    }

    const client = await Client.findByIdAndUpdate(
      req.params.id,
      updatedData,
      { new: true }
    );

    if (!client) {
      return res.status(404).json({
        success: false,
        message: "Client not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Client updated successfully",
      client,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Client
export const deleteClient = async (req, res) => {
  try {
    const client = await Client.findByIdAndDelete(req.params.id);

    if (!client) {
      return res.status(404).json({
        success: false,
        message: "Client not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Client deleted successfully",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};