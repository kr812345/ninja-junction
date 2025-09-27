import * as memberService from '../Services/service.member.js';

// Create a new membership application
const createMember = async (req, res, next) => {
  try {
    const member = await memberService.createMember(req.body);
    res.status(201).json({ message: 'Application submitted successfully!', member });
  } catch (error) {
    next(error);
  }
};

// Get all membership applications
const getMembers = async (req, res, next) => {
  try {
    const result = await memberService.getMembers(req.query);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

// Get a single membership application by ID
const getMemberById = async (req, res, next) => {
  try {
    const member = await memberService.getMemberById(req.params.id);
    if (!member) {
      return res.status(404).json({ success: false, message: 'Membership application not found' });
    }
    res.status(200).json(member);
  } catch (error) {
    next(error);
  }
};

// Update the status of a membership application
const updateMemberStatus = async (req, res, next) => {
  try {
    const { status } = req.body;
    const member = await memberService.updateMemberStatus(req.params.id, status);
    res.status(200).json({ message: 'Application status updated successfully!', member });
  } catch (error) {
    next(error);
  }
};

// Delete a membership application
const deleteMember = async (req, res, next) => {
  try {
    await memberService.deleteMember(req.params.id);
    res.status(200).json({ message: 'Membership application deleted successfully' });
  } catch (error) {
    next(error);
  }
};

export {
  createMember,
  getMembers,
  getMemberById,
  updateMemberStatus,
  deleteMember
};
